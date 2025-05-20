import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureMarketPresence(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow(
          'Market Presence',
          ['S1-10_01 to S1-10_04', 'GRI 202-1', 'GRI 202-2'],
          true,
        ),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
