import {inject} from '@loopback/core';
import {RestBindings, Response, post, requestBody} from '@loopback/rest';
import * as path from 'path';
import puppeteer from 'puppeteer';

export class BrsrReportController {
  @post('/report/download/pdf')
  async downloadPDF(
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @requestBody() body: {html: string},
  ): Promise<Response> {
    const html = body.html;

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(html, {waitUntil: 'networkidle0'});

    const filePath = path.join(__dirname, '../../files/brsr.pdf');
    await page.pdf({path: filePath, format: 'A4', printBackground: true});
    await browser.close();

    response.setHeader('Content-Type', 'application/pdf');
    response.setHeader(
      'Content-Disposition',
      'attachment; filename="BRSR_Report.pdf"',
    );
    response.download(filePath);
    return response;
  }
}
