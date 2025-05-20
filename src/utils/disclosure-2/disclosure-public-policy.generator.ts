import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosurePublicPolicy(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Public Policy',
          ['GRI 415', 'G1-5_01', 'G1-5_02'],
          true,
        ),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
