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
            new Paragraph({text: 'Index', pageBreakBefore: true}),
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
    const allPrinciples = [
      'Principle 1: Ethics and Transparency',
      'Principle 2: Product Lifecycle',
      'Principle 3: Employee Wellbeing',
      'Principle 4: Stakeholder Engagement',
      'Principle 5: Human Rights',
      'Principle 6: Environment',
      'Principle 7: Policy Advocacy',
      'Principle 8: Inclusive Growth',
      'Principle 9: Customer Value',
    ];

    const reordered = [selected, ...allPrinciples.filter(p => p !== selected)];

    const index = reordered.map(
      p =>
        new Paragraph({
          text: `${p} – Summary of ${p.toLowerCase()}`,
          bullet: {level: 0},
        }),
    );

    const sections = reordered
      .map(p => [
        new Paragraph({
          text: p,
          heading: 'Heading1',
          pageBreakBefore: true,
        }),
        new Paragraph({
          text: `This is the detailed description of ${p}. You can include tables, data points, or any rich content here.`,
        }),
      ])
      .flat();

    return {index, sections};
  }

  generateHtmlReport(selected: string) {
    const principles = [
      'Principle 1: Ethics and Transparency',
      'Principle 2: Product Lifecycle',
      'Principle 3: Employee Wellbeing',
      'Principle 4: Stakeholder Engagement',
      'Principle 5: Human Rights',
      'Principle 6: Environment',
      'Principle 7: Policy Advocacy',
      'Principle 8: Inclusive Growth',
      'Principle 9: Customer Value',
    ];

    const reordered = [selected, ...principles.filter(p => p !== selected)];

    const indexList = reordered.map(p => `<li>${p}</li>`).join('');
    const contentSections = reordered
      .map(p => `<h2>${p}</h2><p>Description about ${p}</p>`)
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
