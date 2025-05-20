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
import {generateDisclosure2_2} from '../utils/disclosure-2/disclosure-2-2.generator';
import {generateDisclosure2_3} from '../utils/disclosure-2/disclosure-2-3.generator';
import {generateDisclosure2_4} from '../utils/disclosure-2/disclosure-2-4.generator';
import {generateDisclosure2_5} from '../utils/disclosure-2/disclosure-2-5.generator';
import {generateDisclosure2_6} from '../utils/disclosure-2/disclosure-2-6.generator';
import {generateDisclosure2_7} from '../utils/disclosure-2/disclosure-2-7.generator';
import {generateDisclosure2_8} from '../utils/disclosure-2/disclosure-2-8.generator';
import {generateDisclosureAnnualTotalCompensationRatio} from '../utils/disclosure-2/disclosure-annual-total-compensation-ratio.generator';
import {generateDisclosureAntiCompetitiveBehavior} from '../utils/disclosure-2/disclosure-anti-competitive-behavior.generator';
import {generateDisclosureAntiCorruption} from '../utils/disclosure-2/disclosure-anti-corruption.generator';
import {generateDisclosureCollectiveBargainingAgreements} from '../utils/disclosure-2/disclosure-collective-bargaining-agreements.generator';
import {generateDisclosureComplianceLawsRegulations} from '../utils/disclosure-2/disclosure-compliance-laws-regulations.generator';
import {generateDisclosureConflictsInterest} from '../utils/disclosure-2/disclosure-conflicts-of-interest.generator';
import {generateDisclosureEconomicPerformance} from '../utils/disclosure-2/disclosure-economic-performance.generator';
import {generateDisclosureGovernanceStructureComposition} from '../utils/disclosure-2/disclosure-governance-structure-composition.generator';
import {generateDisclosureIndirectEconomicImpact} from '../utils/disclosure-2/disclosure-indirect-economic-impact.generator';
import {generateDisclosureManagementMaterialTopics} from '../utils/disclosure-2/disclosure-management-of-material-topics.generator';
import {generateDisclosureMarketPresence} from '../utils/disclosure-2/disclosure-market-presence.generator';
import {generateDisclosureMaterialityAssessment} from '../utils/disclosure-2/disclosure-materiality-assessment.generator';
import {generateDisclosureMembershipAssociations} from '../utils/disclosure-2/disclosure-membership-associations.generator';
import {generateDisclosureOrganizationReportingPractices} from '../utils/disclosure-2/disclosure-organization-reporting-practices.generator';
import {generateDisclosurePolicyCommitments} from '../utils/disclosure-2/disclosure-policy-commitments.generator';
import {generateDisclosureGrievanceRedressal} from '../utils/disclosure-2/disclosure-policy-grievance-redressal.generator';
import {generateDisclosurePoliticalContributions} from '../utils/disclosure-2/disclosure-political-contributions.generator';
import {generateDisclosureProcurementPractices} from '../utils/disclosure-2/disclosure-procurement-practices.generator';
import {generateDisclosurePublicPolicy} from '../utils/disclosure-2/disclosure-public-policy.generator';
import {generateDisclosureRemuneration} from '../utils/disclosure-2/disclosure-remuneration.generator';
import {generateDisclosureRisksOpportunitiesClimateChange} from '../utils/disclosure-2/disclosure-risks-opportunities-climate-change.generator';
import {generateDisclosureRolesResponsibilities} from '../utils/disclosure-2/disclosure-roles-responsibilities-governance-body.generator';
import {generateDisclosureStakeholderEngagement} from '../utils/disclosure-2/disclosure-stakeholder-engagement.generator';
import {generateDisclosureStrategyPoliciesPractices} from '../utils/disclosure-2/disclosure-strategy-policies-practices.generator';
import {generateDisclosureSupplierEnvironmental} from '../utils/disclosure-2/disclosure-supplier-environmental-assessment.generator';
import {generateDisclosureSupplierSocialAssessment} from '../utils/disclosure-2/disclosure-supplier-social-assessment.generator';
import {generateDisclosureTax} from '../utils/disclosure-2/disclosure-tax.generator';
import {generateDisclosureMaterialTopics} from '../utils/disclosure-3/disclosure-list-of-material-topics.generator';

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

            ...generateDisclosureOrganizationReportingPractices({}),
            ...generateDisclosure2_2({}),
            ...generateDisclosure2_3({}),
            ...generateDisclosure2_4({}),
            ...generateDisclosure2_5({}),
            ...generateDisclosure2_6({}),
            ...generateDisclosure2_7({}),
            ...generateDisclosure2_8({}),
            ...generateDisclosureStakeholderEngagement({}),
            ...generateDisclosureMaterialityAssessment({}),
            ...generateDisclosureMaterialTopics({}),
            ...generateDisclosureManagementMaterialTopics({}),
            ...generateDisclosureGovernanceStructureComposition({}),
            ...generateDisclosureRolesResponsibilities({}),
            ...generateDisclosureConflictsInterest({}),
            ...generateDisclosureRemuneration({}),
            ...generateDisclosureAnnualTotalCompensationRatio({}),
            ...generateDisclosureStrategyPoliciesPractices({}),
            ...generateDisclosurePolicyCommitments({}),
            ...generateDisclosureGrievanceRedressal({}),
            ...generateDisclosureComplianceLawsRegulations({}),
            ...generateDisclosureMembershipAssociations({}),
            ...generateDisclosureCollectiveBargainingAgreements({}),
            ...generateDisclosureEconomicPerformance({}),
            ...generateDisclosureRisksOpportunitiesClimateChange({}),
            ...generateDisclosureMarketPresence({}),
            ...generateDisclosureIndirectEconomicImpact({}),
            ...generateDisclosureProcurementPractices({}),
            ...generateDisclosureSupplierEnvironmental({}),
            ...generateDisclosureSupplierSocialAssessment({}),
            ...generateDisclosureAntiCorruption({}),
            ...generateDisclosureAntiCompetitiveBehavior({}),
            ...generateDisclosureTax({}),
            ...generateDisclosurePublicPolicy({}),
            ...generateDisclosurePoliticalContributions({}),
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
