import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureImpactRiskOpportunity(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Impact, risk and opportunity management', [
          'E2-6_01 to E2-6_11',
        ]),
      ],
    }),

    ...emptyTable({}),
  ];
}
