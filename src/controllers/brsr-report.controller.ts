import {inject} from '@loopback/core';
import {RestBindings, Response, post, requestBody} from '@loopback/rest';
import {Document, Paragraph, Packer} from 'docx';
import * as fs from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer';

export class BrsrReportController {
  @post('/report/download/word')
  async downloadWord(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody() body: {selected: string},
  ) {
    const {index, sections} = this.generateReportContent(body.selected);

    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({text: 'BRSR Report', heading: 'Title'}),
            new Paragraph({text: '', pageBreakBefore: true}),
            new Paragraph({
              text: 'Index',
              heading: 'Heading1',
              pageBreakBefore: true,
            }),
            ...index,
            new Paragraph({text: '', pageBreakBefore: true}),
            ...sections,
          ],
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);
    const filePath = path.join(__dirname, '../../files/brsr.docx');
    fs.writeFileSync(filePath, buffer);
    response.download(filePath, 'BRSR_Report.docx');
    return response;
  }

  @post('/report/download/pdf')
  async downloadPDF(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody() body: {selected: string},
  ) {
    const html = this.generateHtmlReport(body.selected);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);

    const filePath = path.join(__dirname, '../../files/brsr.pdf');
    await page.pdf({path: filePath, format: 'A4'});
    await browser.close();

    response.download(filePath, 'BRSR_Report.pdf');
    return response;
  }

  generateReportContent(selected: string) {
    const principles = [
      {
        name: 'Principle 1: Ethics and Transparency',
        description:
          'Focus on fair practices, disclosures, and grievance redressal mechanisms.',
        metrics: [
          {label: 'Whistleblower Complaints', value: 12},
          {
            label: 'Resolution Rate',
            value: '95%',
            formula: 'resolved / total * 100',
          },
        ],
      },
      {
        name: 'Principle 2: Product Lifecycle',
        description:
          'Promote sustainable product development and responsible use.',
        metrics: [
          {
            label: 'Eco-friendly Products (%)',
            value: 60,
            formula: '(ecoProducts / totalProducts) * 100',
          },
        ],
      },
      {
        name: 'Principle 3: Employee Wellbeing',
        description: 'Ensure employee health, safety, and skill development.',
        metrics: [{label: 'Training Hours per Employee', value: 24}],
      },
    ];

    const selectedPrinciple = principles.find(p => p.name === selected);

    if (!selectedPrinciple) {
      throw new Error('Selected principle not found');
    }

    const reordered = [
      selectedPrinciple,
      ...principles.filter(p => p.name !== selected),
    ];

    const index = reordered.map(
      p =>
        new Paragraph({
          text: `${p.name} – ${p.description}`,
          bullet: {level: 0},
        }),
    );

    const sections = reordered.flatMap(p => {
      const metricParagraphs =
        p.metrics?.map(
          m =>
            new Paragraph({
              text: `${m.label}: ${m.value}${
                m.formula ? ` (Formula: ${m.formula})` : ''
              }`,
              bullet: {level: 1},
            }),
        ) ?? [];

      return [
        new Paragraph({
          text: p.name,
          heading: 'Heading1',
          pageBreakBefore: true,
        }),
        new Paragraph({text: p.description}),
        ...metricParagraphs,
        new Paragraph({
          text: 'Future updates will include automated data and formula-driven metrics for this principle.',
        }),
      ];
    });

    return {index, sections};
  }

  generateHtmlReport(selected: string) {
    const principles = [
      {
        name: 'Principle 1: Ethics and Transparency',
        description:
          'Focus on fair practices, disclosures, and grievance redressal mechanisms.',
        metrics: [
          {label: 'Whistleblower Complaints', value: 12},
          {
            label: 'Resolution Rate',
            value: '95%',
            formula: 'resolved / total * 100',
          },
        ],
      },
      {
        name: 'Principle 2: Product Lifecycle',
        description:
          'Promote sustainable product development and responsible use.',
        metrics: [
          {
            label: 'Eco-friendly Products (%)',
            value: 60,
            formula: '(ecoProducts / totalProducts) * 100',
          },
        ],
      },
      {
        name: 'Principle 3: Employee Wellbeing',
        description: 'Ensure employee health, safety, and skill development.',
        metrics: [{label: 'Training Hours per Employee', value: 24}],
      },
    ];

    const reordered = [
      ...principles.filter(p => p.name === selected),
      ...principles.filter(p => p.name !== selected),
    ];

    const indexList = reordered
      .map(p => `<li><strong>${p.name}</strong> – ${p.description}</li>`)
      .join('');

    const contentSections = reordered
      .map(p => {
        const metrics = p.metrics
          ?.map(
            m =>
              `<li>${m.label}: ${m.value}${
                m.formula ? ` (Formula: ${m.formula})` : ''
              }</li>`,
          )
          .join('');
        return `<h2>${p.name}</h2>
          <p>${p.description}</p>
          <ul>${metrics}</ul>
          <p><em>Future updates will include automated data and formula-driven metrics for this principle.</em></p>`;
      })
      .join('<div class="page-break"></div>');

    return `
       <html>
        <head>
          <style>
            body { font-family: Arial; padding: 40px; }
            .page-break { page-break-before: always; }
          </style>
        </head>
        <body>
          <h1>BRSR Report</h1>
          <div class="page-break"></div>

          <h2>Index</h2>
          <ul>${indexList}</ul>
          <div class="page-break"></div>

          ${contentSections}
        </body>
      </html>
    `;
  }
}
