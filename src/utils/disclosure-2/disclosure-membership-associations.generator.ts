import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureMembershipAssociations(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [generateTitleRow('Membership associations', ['GRI 2-28'])],
    }),

    ...emptyTable(data ?? {}),
  ];
}
