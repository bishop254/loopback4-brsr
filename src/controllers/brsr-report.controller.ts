// LoopBack 4 based implementation
import {inject} from '@loopback/core';
import {post, requestBody, Response, RestBindings} from '@loopback/rest';
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  PageBreak,
  Paragraph,
  Table,
  TableCell,
  TableOfContents,
  TableRow,
} from 'docx';

export class ReportController {
  constructor(@inject(RestBindings.Http.RESPONSE) private response: Response) {}

  // helper to generate Disclosure 2-1
  generateDisclosure2_1(data: any) {
    return [
      new Paragraph({
        text: 'Disclosure 2-1: Organizational details',
        heading: HeadingLevel.HEADING_1,
      }),
      new Paragraph({
        text: 'The organization shall:',
      }),
      new Table({
        rows: [
          ['Legal Name', data.legalName],
          ['Ownership and Legal Form', data.ownershipForm],
          ['Headquarters', data.headquarters],
          ['Countries of Operation', data.countriesOfOperation],
        ].map(
          ([label, value]) =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({children: [new Paragraph(value || '-')]}),
              ],
            }),
        ),
      }),
      new Paragraph({text: '', children: [new PageBreak()]}),
    ];
  }

  // document generator
  async generateDocx(data: any): Promise<Buffer> {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: 'Sustainability Report',
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              text: 'Table of Contents',
              heading: HeadingLevel.HEADING_1,
            }),
            new TableOfContents('Table of Contents', {
              hyperlink: true,
              headingStyleRange: '1-5',
            }),
            new Paragraph({text: '', children: [new PageBreak()]}),

            // Disclosure sections
            ...this.generateDisclosure2_1(data.disclosure_2_1 || {}),
          ],
        },
      ],
    });

    return Packer.toBuffer(doc);
  }

  @post('/generate-report', {
    responses: {
      '200': {
        description: 'Generate Sustainability Report',
        content: {
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            {schema: {type: 'string', format: 'binary'}},
        },
      },
    },
  })
  async generateReport(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              disclosure_2_1: {
                type: 'object',
                properties: {
                  legalName: {type: 'string'},
                  ownershipForm: {type: 'string'},
                  headquarters: {type: 'string'},
                  countriesOfOperation: {type: 'string'},
                },
              },
            },
          },
        },
      },
    })
    data: any,
  ): Promise<void> {
    try {
      const buffer = await this.generateDocx(data);
      const fileName = 'Sustainability_Report.docx';
      this.response.setHeader(
        'Content-Disposition',
        `attachment; filename=${fileName}`,
      );
      this.response.contentType(
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      );
      this.response.send(buffer);
    } catch (err: any) {
      this.response.status(500).json({error: err.message});
    }
  }
}
