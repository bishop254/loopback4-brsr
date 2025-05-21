import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureForcedLabour(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Forced or Compulsory Labor', [
          'S1.SBM-3_01 to S1.SBM-3_06',
          'S1-1_06',
          'S1-1_08',
          'S1-1_10',
          'S1-1_13',
          'S2-2_01',
          'S2-1_07',
          'S2-1_09',
          'GRI 409-1',
          'S1.SBM-3_07',
          'S1.SBM-3_08',
          'S1-1_08',
        ]),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
