import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureRolesResponsibilities(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Management of material topics', [
          'ESRS 2 GOV-1_10,ESRS 2 GOV-2_01',
          'ESRS 2 GOV-2_02',
          'ESRS 2 SBM-2_12',
          'S4-2_09,G1.GOV-1_012-13 ESRS 2 GOV-1_11 ,GOV-1_12,ESRS 2 GOV-2_01,G1-3_03,2-14 ESRS 2 IRO-1_11',
          'GRI 2-17',
          'ESRS 2 GOV-1_15',
          'GRI 2-18 ,GRI 2-12',
        ]),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
