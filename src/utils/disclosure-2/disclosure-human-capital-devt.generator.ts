import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureHumanCapitalDevelopment(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Human capital development', ['S1-1_22', 'GRI 404-2']),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
