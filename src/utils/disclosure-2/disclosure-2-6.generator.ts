import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosure2_6(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Activities and workers', [
          'GRI 2-6',
          'ESRS 2 SBM-1 40',
          'SBM-1_01',
          'SBM-1_01',
          'SBM-1_05',
          'SBM-1_07',
          'SBM-1_08',
          'SBM-1_09',
          'SBM-1_15',
          'SBM-1_16',
          'SBM-1_17',
          'SBM-1_18',
          'SBM-1_19',
          'SBM-1_25',
          'SBM-1_28',
        ]),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
