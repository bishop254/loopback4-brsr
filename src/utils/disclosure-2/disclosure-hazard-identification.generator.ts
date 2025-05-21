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
      rows: [
        generateTitleRow(
          'Hazard identification, risk assessment, and incident investigation',
          ['S1-3_02', 'S1-3_09', 'GRI 403-2 '],
        ),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
