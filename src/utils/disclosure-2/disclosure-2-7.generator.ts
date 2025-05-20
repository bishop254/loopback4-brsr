import {Table, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosure2_7(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Workforce', [
          'GRI 2-7',
          'ESRS 2 SBM-1 40, SBM-1_03, SBM-1_04',
          'ESRS S1 S1-6 50, 51 to 52',
          'S1-6_01 to S1-6_10, S1-6_13 to S1-6_20, S2-4_01 to S2-5_06',
          'GRI 2-8',
          'S1-7_01 to S1-7_10',
          'S2-4_01 to S2-5_06',
        ]),
      ],
    }),

    // ...emptyTable(data ?? {}),
  ];
}
