import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureConflictsInterest(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [generateTitleRow('Conflicts of interest', ['GRI 2-15'])],
    }),

    ...emptyTable(data ?? {}),
  ];
}
