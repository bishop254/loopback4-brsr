import {HeadingLevel, Paragraph, Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureStrategyPoliciesPractices(data: any) {
  return [
    new Paragraph({
      text: 'Strategy, policies and practices',
      heading: HeadingLevel.HEADING_2,
    }),

    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Statement on sustainable development strategy', [
          'ESRS 2 BP-2_23',
          'ESRS 2 SBM-1_23',
          'GRI 2-22',
        ]),
      ],
    }),

    ...emptyTable({}),
  ];
}
