import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWaste(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Waste',
          [
            'GRI 306',
            'E5.IRO-1_01',
            'E5.MDR',
            'E5-1_01 to E5-1_04',
            'E5-3_01 to E5-3_13',
            'E5-6_01 to E5-6_06',
            'GRI 306-1',
            'ESRS 2 SBM-3_01',
            'SBM-3_05',
            'SBM-3_07',
            'E5.IRO-1_01',
            'E5.IRO-1_02',
            'E5-4_01',
            'GRI 306-2',
            'E2-4_05',
            'E2-4_06',
            'E2-4_07',
            'E5-2_01 to E5-2_10',
            'E5-5_17',
          ],
          true,
        ),
      ],
    }),

    ...emptyTable({}),
  ];
}
