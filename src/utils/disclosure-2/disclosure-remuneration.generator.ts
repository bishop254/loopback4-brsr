import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureRemuneration(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Remuneration', [
          'GRI 2-19',
          'ESRS 2 GOV-3_01,GOV-3_02,GOV-3_03,GOV-3_04',
          'E1.GOV-3_01,E1.GOV-3_03,GRI 2-20',
          'ESRS 2 GOV-3_06',
        ]),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
