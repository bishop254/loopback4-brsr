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
  TableOfContents,
} from 'docx';
import {generateDisclosure2_1} from '../utils/disclosure-2/disclosure-2-1.generator';
import {generateDisclosure2_10} from '../utils/disclosure-2/disclosure-2-10.generator';
import {generateDisclosure2_11} from '../utils/disclosure-2/disclosure-2-11.generator';
import {generateDisclosure2_12} from '../utils/disclosure-2/disclosure-2-12.generator';
import {generateDisclosure2_13} from '../utils/disclosure-2/disclosure-2-13.generator';
import {generateDisclosure2_14} from '../utils/disclosure-2/disclosure-2-14.generator';
import {generateDisclosure2_15} from '../utils/disclosure-2/disclosure-2-15.generator';
import {generateDisclosure2_16} from '../utils/disclosure-2/disclosure-2-16.generator';
import {generateDisclosure2_17} from '../utils/disclosure-2/disclosure-2-17.generator';
import {generateDisclosure2_18} from '../utils/disclosure-2/disclosure-2-18.generator';
import {generateDisclosure2_19} from '../utils/disclosure-2/disclosure-2-19.generator';
import {generateDisclosure2_2} from '../utils/disclosure-2/disclosure-2-2.generator';
import {generateDisclosure2_20} from '../utils/disclosure-2/disclosure-2-20.generator';
import {generateDisclosure2_21} from '../utils/disclosure-2/disclosure-2-21.generator';
import {generateDisclosure2_22} from '../utils/disclosure-2/disclosure-2-22.generator';
import {generateDisclosure2_23} from '../utils/disclosure-2/disclosure-2-23.generator';
import {generateDisclosure2_24} from '../utils/disclosure-2/disclosure-2-24.generator';
import {generateDisclosure2_25} from '../utils/disclosure-2/disclosure-2-25.generator';
import {generateDisclosure2_26} from '../utils/disclosure-2/disclosure-2-26.generator';
import {generateDisclosure2_27} from '../utils/disclosure-2/disclosure-2-27.generator';
import {generateDisclosure2_28} from '../utils/disclosure-2/disclosure-2-28.generator';
import {generateDisclosure2_29} from '../utils/disclosure-2/disclosure-2-29.generator';
import {generateDisclosure2_3} from '../utils/disclosure-2/disclosure-2-3.generator';
import {generateDisclosure2_30} from '../utils/disclosure-2/disclosure-2-30.generator';
import {generateDisclosure2_4} from '../utils/disclosure-2/disclosure-2-4.generator';
import {generateDisclosure2_5} from '../utils/disclosure-2/disclosure-2-5.generator';
import {generateDisclosure2_6} from '../utils/disclosure-2/disclosure-2-6.generator';
import {generateDisclosure2_7} from '../utils/disclosure-2/disclosure-2-7.generator';
import {generateDisclosure2_8} from '../utils/disclosure-2/disclosure-2-8.generator';
import {generateDisclosure2_9} from '../utils/disclosure-2/disclosure-2-9.generator';
import {generateDisclosure3_1} from '../utils/disclosure-3/disclosure-3-1.generator';

export class ReportController {
  constructor(@inject(RestBindings.Http.RESPONSE) private response: Response) {}

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

            //Disclosure 2-x
            ...generateDisclosure2_1(data.disclosure_2_1 ?? {}),
            ...generateDisclosure2_2(data.disclosure_2_2 ?? {}),
            ...generateDisclosure2_3(data.disclosure_2_3 ?? {}),
            ...generateDisclosure2_4(data.disclosure_2_4 ?? {}),
            ...generateDisclosure2_5(data.disclosure_2_5 ?? {}),
            ...generateDisclosure2_6(data.disclosure_2_6 ?? {}),
            ...generateDisclosure2_7(data.disclosure_2_7 ?? {}),
            ...generateDisclosure2_8(data.disclosure_2_8 ?? {}),
            ...generateDisclosure2_9(data.disclosure_2_9 ?? {}),
            ...generateDisclosure2_10(data.disclosure_2_10 ?? {}),
            ...generateDisclosure2_11(data.disclosure_2_11 ?? {}),
            ...generateDisclosure2_12(data.disclosure_2_12 ?? {}),
            ...generateDisclosure2_13(data.disclosure_2_13 ?? {}),
            ...generateDisclosure2_14(data.disclosure_2_14 ?? {}),
            ...generateDisclosure2_15(data.disclosure_2_15 ?? {}),
            ...generateDisclosure2_16(data.disclosure_2_16 ?? {}),
            ...generateDisclosure2_17(data.disclosure_2_17 ?? {}),
            ...generateDisclosure2_18(data.disclosure_2_18 ?? {}),
            ...generateDisclosure2_19(data.disclosure_2_19 ?? {}),
            ...generateDisclosure2_20(data.disclosure_2_20 ?? {}),
            ...generateDisclosure2_21(data.disclosure_2_21 ?? {}),
            ...generateDisclosure2_22(data.disclosure_2_22 ?? {}),
            ...generateDisclosure2_23(data.disclosure_2_23 ?? {}),
            ...generateDisclosure2_24(data.disclosure_2_24 ?? {}),
            ...generateDisclosure2_25(data.disclosure_2_25 ?? {}),
            ...generateDisclosure2_26(data.disclosure_2_26 ?? {}),
            ...generateDisclosure2_27(data.disclosure_2_27 ?? {}),
            ...generateDisclosure2_28(data.disclosure_2_28 ?? {}),
            ...generateDisclosure2_29(data.disclosure_2_29 ?? {}),
            ...generateDisclosure2_30(data.disclosure_2_30 ?? {}),

            //Disclosure 3-x
            ...generateDisclosure3_1(data.disclosure_3_1 ?? {}),
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
