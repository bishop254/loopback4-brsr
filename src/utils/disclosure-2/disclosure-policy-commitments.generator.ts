import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosurePolicyCommitments(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Policy commitments', [
          'S1-1_01-S1-1_04',
          'S1-1_07',
          'S1-1_12',
          'S1-1_14',
          'S2-1_01',
          'S2-1_08',
          'S2-1_11',
          'S3-1_02',
          'S3-1_06',
          'S3-1_09',
          'S4-1_01',
          'S4-1_02',
          'S4-1_06',
          'S4-1_09',
          'G1-1_01',
          'GRI 2-24',
          'ESRS 2 GOV-2_02',
          'S1-4_14',
          'S2-4_13',
          'S3-4_13',
          'S4-4_13',
          'G1-1_01',
          'G1-1_10',
          'GRI 2-23',
        ]),
      ],
    }),

    ...emptyTable({}),
  ];
}
