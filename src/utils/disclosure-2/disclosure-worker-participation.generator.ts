import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureHazardIdentification(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [generateTitleRow('Worker participation', ['GRI 403-4'])],
    }),

    ...emptyTable(data ?? {}),
  ];
}
