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
import {generateDisclosure2_2} from '../utils/disclosure-2/disclosure-2-2.generator';
import {generateDisclosure2_3} from '../utils/disclosure-2/disclosure-2-3.generator';
import {generateDisclosure2_4} from '../utils/disclosure-2/disclosure-2-4.generator';
import {generateDisclosure2_5} from '../utils/disclosure-2/disclosure-2-5.generator';
import {generateDisclosure2_6} from '../utils/disclosure-2/disclosure-2-6.generator';
import {generateDisclosure2_7} from '../utils/disclosure-2/disclosure-2-7.generator';
import {generateDisclosure2_8} from '../utils/disclosure-2/disclosure-2-8.generator';
import {generateDisclosure2_9} from '../utils/disclosure-2/disclosure-2-9.generator';
import {generateDisclosureConflictsInterest} from '../utils/disclosure-2/disclosure-conflicts-of-interest.generator';
import {generateDisclosure2_28} from '../utils/disclosure-2/disclosure-management-of-material-topics.generator';
import {generateDisclosureMaterialityAssessment} from '../utils/disclosure-2/disclosure-materiality-assessment.generator';
import {generateDisclosureRemuneration} from '../utils/disclosure-2/disclosure-remuneration.generator';
import {generateDisclosureRolesResponsibilities} from '../utils/disclosure-2/disclosure-roles-responsibilities-governance-body.generator';
import {generateDisclosureStakeholderEngagement} from '../utils/disclosure-2/disclosure-stakeholder-engagement.generator';
import {generateDisclosure3_2} from '../utils/disclosure-3/disclosure-list-of-material-topics.generator';

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

            ...generateDisclosure2_1(data.disclosure_2_1 ?? {}),
            ...generateDisclosure2_2(data.disclosure_2_2 ?? {}),
            ...generateDisclosure2_3(data.disclosure_2_3 ?? {}),
            ...generateDisclosure2_4(data.disclosure_2_4 ?? {}),
            ...generateDisclosure2_5(data.disclosure_2_5 ?? {}),
            ...generateDisclosure2_6(data.disclosure_2_6 ?? {}),
            ...generateDisclosure2_7(data.disclosure_2_7 ?? {}),
            ...generateDisclosure2_8(data.disclosure_2_8 ?? {}),
            ...generateDisclosureStakeholderEngagement(
              data.disclosure_2_29 ?? {},
            ),
            ...generateDisclosureMaterialityAssessment({}),
            ...generateDisclosure3_2(data.disclosure_3_2 ?? {}),
            ...generateDisclosure2_28({}),
            ...generateDisclosure2_9(data.disclosure_2_9 ?? {}),
            ...generateDisclosureRolesResponsibilities({}),
            ...generateDisclosureConflictsInterest({}),
            ...generateDisclosureRemuneration({}),
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
