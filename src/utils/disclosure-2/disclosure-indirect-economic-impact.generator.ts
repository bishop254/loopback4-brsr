import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureIndirectEconomicImpact(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow(
          'Indirect Economic Impact',
          [
            'GRI 203-1',
            'GRI 203-2',
            'S1-4_18',
            'S2-4_17',
            'S3-4_18',
            'S3-4_1',
            'S4-4_17',
          ],
          true,
        ),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
