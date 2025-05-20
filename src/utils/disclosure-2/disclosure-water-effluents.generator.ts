import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWaterEffluents(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Water & effluents',
          [
            'E2-3_09',
            'E2-3_10',
            'E2-3_11',
            'E3-1_01 to E3-1_12',
            'E3-2_01',
            'GRI 303-1',
            'ESRS 2 SBM-3_04',
            'ESRS 2 SBM-3_07',
            'E3.IRO-1_01',
            'E3.IRO-1_02',
            'E3.MDR-P_07-08E3.',
            'MDR-A_01-12',
            'E3-2_02',
            'E3-3_01 to E3-3_10',
            'GRI 303-2',
            'E2-3_05',
            'E2-3_06',
            'E2-3_07',
            'E2-3_08',
            'E2-4_03',
            'E2-4_11',
            'E2-4_12',
            'E2-4_13',
            'E2-4_14',
            'E3-2_03',
            'E3-5_01to E3-5_06',
          ],
          true,
        ),
      ],
    }),

    ...emptyTable({}),
  ];
}
