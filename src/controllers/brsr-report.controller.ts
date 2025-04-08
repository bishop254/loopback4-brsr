// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {RestBindings, Response, get} from '@loopback/rest';
import {Document, Paragraph, Packer} from 'docx';
import * as fs from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer';

export class BrsrReportController {
  @get('/report/download/word')
  async downloadWord(@inject(RestBindings.Http.RESPONSE) response: Response) {
    const {index, sections} = this.generateReportContent();

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

  @get('/report/download/pdf')
  async downloadPDF(@inject(RestBindings.Http.RESPONSE) response: Response) {
    const html = this.generateHtmlReport();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);

    const filePath = path.join(__dirname, '../../files/brsr.pdf');
    await page.pdf({path: filePath, format: 'A4'});
    await browser.close();

    response.download(filePath, 'BRSR_Report.pdf');
    return response;
  }

  generateReportContent() {
    const principles = [
      'Principle 1: Ethics and Transparency',
      'Principle 2: Product Lifecycle',
      'Principle 3: Employee Wellbeing',
    ];

    const index = principles.map(p => new Paragraph({text: p}));
    const sections = principles.map(
      p => new Paragraph({text: `\n\n${p}\nDescription of ${p}...`}),
    );

    return {index, sections};
  }

  generateHtmlReport() {
    const principles = [
      'Principle 1: Ethics and Transparency',
      'Principle 2: Product Lifecycle',
      'Principle 3: Employee Wellbeing',
      // ...
    ];

    const indexList = principles.map(p => `<li>${p}</li>`).join('');
    const contentSections = principles
      .map(p => `<h2>${p}</h2><p>Description about ${p}</p>`)
      .join('<hr/>');

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
