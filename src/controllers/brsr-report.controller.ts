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
import {generateDisclosureAirEmissions} from '../utils/disclosure-2/disclosure-air-emissions.generator';
import {generateDisclosureAnnualTotalCompensationRatio} from '../utils/disclosure-2/disclosure-annual-total-compensation-ratio.generator';
import {generateDisclosureAntiCompetitiveBehavior} from '../utils/disclosure-2/disclosure-anti-competitive-behavior.generator';
import {generateDisclosureAntiCorruption} from '../utils/disclosure-2/disclosure-anti-corruption.generator';
import {generateDisclosureBenefitsProvided} from '../utils/disclosure-2/disclosure-benefits-provided.generator';
import {generateDisclosureBiodiversity} from '../utils/disclosure-2/disclosure-biodiversity.generator';
import {generateDisclosureCarbonPricing} from '../utils/disclosure-2/disclosure-carbon-pricing.generator';
import {generateDisclosureCareerDevelopment} from '../utils/disclosure-2/disclosure-career-devt-program.generator';
import {generateDisclosureCollectiveBargainingAgreements} from '../utils/disclosure-2/disclosure-collective-bargaining-agreements.generator';
import {generateDisclosureComplianceLawsRegulations} from '../utils/disclosure-2/disclosure-compliance-laws-regulations.generator';
import {generateDisclosureConflictsInterest} from '../utils/disclosure-2/disclosure-conflicts-of-interest.generator';
import {generateDisclosureDiversityInclusion} from '../utils/disclosure-2/disclosure-diversity-inclusion.generator';
import {generateDisclosureEconomicPerformance} from '../utils/disclosure-2/disclosure-economic-performance.generator';
import {generateDisclosureGHGIntensity} from '../utils/disclosure-2/disclosure-emissions-intensity.generator';
import {generateDisclosureODS} from '../utils/disclosure-2/disclosure-emissions-ods.generator';
import {generateDisclosureGHGReduction} from '../utils/disclosure-2/disclosure-emissions-reduction.generator';
import {generateDisclosureEmissionsGHG} from '../utils/disclosure-2/disclosure-emissions.generator';
import {generateDisclosureEnergyOutside} from '../utils/disclosure-2/disclosure-energy-consumption-outside-organization.generator';
import {generateDisclosureEnergyReductionProducts} from '../utils/disclosure-2/disclosure-energy-intensity-products-services.generator';
import {generateDisclosureEnergyIntensity} from '../utils/disclosure-2/disclosure-energy-intensity.generator';
import {generateDisclosureEnergyReduction} from '../utils/disclosure-2/disclosure-energy-reduction.generator';
import {generateDisclosureEnergy} from '../utils/disclosure-2/disclosure-energy.generator';
import {generateDisclosureGovernanceStructureComposition} from '../utils/disclosure-2/disclosure-governance-structure-composition.generator';
import {generateDisclosureHazardIdentification} from '../utils/disclosure-2/disclosure-hazard-identification.generator';
import {generateDisclosureHumanCapitalDevelopment} from '../utils/disclosure-2/disclosure-human-capital-devt.generator';
import {generateDisclosureImpactRiskOpportunity} from '../utils/disclosure-2/disclosure-impact-risk-opportunity.generator';
import {generateDisclosureIndirectEconomicImpact} from '../utils/disclosure-2/disclosure-indirect-economic-impact.generator';
import {generateDisclosureManagementMaterialTopics} from '../utils/disclosure-2/disclosure-management-of-material-topics.generator';
import {generateDisclosureMarketPresence} from '../utils/disclosure-2/disclosure-market-presence.generator';
import {generateDisclosureMaterialityAssessment} from '../utils/disclosure-2/disclosure-materiality-assessment.generator';
import {generateDisclosureMaterials} from '../utils/disclosure-2/disclosure-materials.generator';
import {generateDisclosureMembershipAssociations} from '../utils/disclosure-2/disclosure-membership-associations.generator';
import {generateDisclosureHealthServices} from '../utils/disclosure-2/disclosure-o-health-services.generator';
import {generateDisclosureOHSSafety} from '../utils/disclosure-2/disclosure-ohs.generator';
import {generateDisclosureOrganizationReportingPractices} from '../utils/disclosure-2/disclosure-organization-reporting-practices.generator';
import {generateDisclosureParentalLeave} from '../utils/disclosure-2/disclosure-parental-leave.generator';
import {generateDisclosurePolicyCommitments} from '../utils/disclosure-2/disclosure-policy-commitments.generator';
import {generateDisclosureGrievanceRedressal} from '../utils/disclosure-2/disclosure-policy-grievance-redressal.generator';
import {generateDisclosurePoliticalContributions} from '../utils/disclosure-2/disclosure-political-contributions.generator';
import {generateDisclosurePreventionMitigationOccupationalHealthSafetyImpacts} from '../utils/disclosure-2/disclosure-prevention-mitigation-occupational-health-safety-impacts.generator';
import {generateDisclosureProcurementPractices} from '../utils/disclosure-2/disclosure-procurement-practices.generator';
import {generateDisclosurePublicPolicy} from '../utils/disclosure-2/disclosure-public-policy.generator';
import {generateDisclosureRemuneration} from '../utils/disclosure-2/disclosure-remuneration.generator';
import {generateDisclosureRisksOpportunitiesClimateChange} from '../utils/disclosure-2/disclosure-risks-opportunities-climate-change.generator';
import {generateDisclosureRolesResponsibilities} from '../utils/disclosure-2/disclosure-roles-responsibilities-governance-body.generator';
import {generateDisclosureSocial} from '../utils/disclosure-2/disclosure-social.generator';
import {generateDisclosureStakeholderEngagement} from '../utils/disclosure-2/disclosure-stakeholder-engagement.generator';
import {generateDisclosureStrategyPoliciesPractices} from '../utils/disclosure-2/disclosure-strategy-policies-practices.generator';
import {generateDisclosureSupplierEnvironmental} from '../utils/disclosure-2/disclosure-supplier-environmental-assessment.generator';
import {generateDisclosureSupplierSocialAssessment} from '../utils/disclosure-2/disclosure-supplier-social-assessment.generator';
import {generateDisclosureTax} from '../utils/disclosure-2/disclosure-tax.generator';
import {generateDisclosureTrainingEducation} from '../utils/disclosure-2/disclosure-training-education.generator';
import {generateDisclosureWasteDirected} from '../utils/disclosure-2/disclosure-waste-directed-displosal.generator';
import {generateDisclosureWasteDiverted} from '../utils/disclosure-2/disclosure-waste-diverted-displosal.generator';
import {generateDisclosureWasteGenerated} from '../utils/disclosure-2/disclosure-waste-generated.generator';
import {generateDisclosureWaste} from '../utils/disclosure-2/disclosure-waste.generator';
import {generateDisclosureWaterConsumption} from '../utils/disclosure-2/disclosure-water-consumption.generator';
import {generateDisclosureWaterDischarge} from '../utils/disclosure-2/disclosure-water-discharge.generator';
import {generateDisclosureWaterEffluents} from '../utils/disclosure-2/disclosure-water-effluents.generator';
import {generateDisclosureWaterWithdrawal} from '../utils/disclosure-2/disclosure-water-withdrawals.generator';
import {generateDisclosureWorkRelatedIllHealth} from '../utils/disclosure-2/disclosure-work-related-ill-health.generator';
import {generateDisclosureWorkRelatedInjuries} from '../utils/disclosure-2/disclosure-work-related-injuries.generator';
import {generateDisclosureWorkerTraining} from '../utils/disclosure-2/disclosure-worker-training.generator';
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
            ...generateDisclosureMaterials({}),
            ...generateDisclosureEnergy({}),
            ...generateDisclosureEnergyOutside({}),
            ...generateDisclosureEnergyIntensity({}),
            ...generateDisclosureEnergyReduction({}),
            ...generateDisclosureEnergyReductionProducts({}),
            ...generateDisclosureWaterEffluents({}),
            ...generateDisclosureWaterWithdrawal({}),
            ...generateDisclosureWaterDischarge({}),
            ...generateDisclosureWaterConsumption({}),
            ...generateDisclosureBiodiversity({}),
            ...generateDisclosureEmissionsGHG({}),
            ...generateDisclosureGHGIntensity({}),
            ...generateDisclosureGHGReduction({}),
            ...generateDisclosureCarbonPricing({}),
            ...generateDisclosureODS({}),
            ...generateDisclosureAirEmissions({}),
            ...generateDisclosureImpactRiskOpportunity({}),
            ...generateDisclosureWaste({}),
            ...generateDisclosureWasteGenerated({}),
            ...generateDisclosureWasteDiverted({}),
            ...generateDisclosureWasteDirected({}),
            ...generateDisclosureSocial({}),
            ...generateDisclosureBenefitsProvided({}),
            ...generateDisclosureParentalLeave({}),
            ...generateDisclosureOHSSafety({}),
            ...generateDisclosureHazardIdentification({}),
            ...generateDisclosureHealthServices({}),
            ...generateDisclosureWorkerTraining({}),
            ...generateDisclosurePreventionMitigationOccupationalHealthSafetyImpacts(
              {},
            ),
            ...generateDisclosureWorkRelatedInjuries({}),
            ...generateDisclosureWorkRelatedIllHealth({}),
            ...generateDisclosureTrainingEducation({}),
            ...generateDisclosureHumanCapitalDevelopment({}),
            ...generateDisclosureCareerDevelopment({}),
            ...generateDisclosureDiversityInclusion({}),
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
