import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureGrievanceRedressal(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Policy commitments', [
          'S1-1_06',
          'S1-1_21',
          'S1-3_01 to S1-3_09',
          'S1-17_03',
          'S2-3_01 to S2-3_06',
          'S2-3_11',
          'S2-3_12',
          'S2-1_04',
          'S2-4_07',
          'S3-1_05',
          'S3-3_10 to S3-3_21',
          'S3-4_07',
          'S4-3_01',
          'S4-3_02',
          'S4-3_03',
          'S4-1_05',
          'S4-3_05',
          'S4-3_06',
          'S4-3_09',
          'S4-3_11',
          'S4-3_12',
          'S4-4_07',
          'GRI 2-26',
          'S1-3_07',
          'S2-3_04',
          'S3-3_13',
          'S4-3_04',
          'G1-1_02',
          'G1-1_05',
          'G1-1_13',
          'G1-1_14',
          'G1-3_01',
          'GRI 2-25',
        ]),
      ],
    }),

    ...emptyTable({}),
  ];
}
