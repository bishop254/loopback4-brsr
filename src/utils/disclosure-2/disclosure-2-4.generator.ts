import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosure2_4(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Restatements of information', [
          'GRI 2-4',
          'ESRS 2',
          'BP-2',
          'BP-2_10',
          'BP-2_11',
          'BP-2_12',
          'BP-2_13',
          'BP-2_14',
        ]),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
