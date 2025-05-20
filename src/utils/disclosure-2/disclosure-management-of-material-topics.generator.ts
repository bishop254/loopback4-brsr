import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureManagementMaterialTopics(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Management of material topics', [
          'GRI 3-3',
          'ESRS 2 BP-2_24',
          'ESRS 2 BP-2_25',
          'ESRS 2 BP-2_26',
          'ESRS 2 BP-2_27',
          'ESRS 2 SBM-1_21',
          'ESRS 2 IRO-1_01',
          'ESRS 2 IRO-1_02',
          'ESRS 2 IRO-1_03',
          'ESRS 2 IRO-1_04',
          'ESRS 2 IRO-1_05',
          'ESRS 2 IRO-1_06',
          'ESRS 2 MDR',
        ]),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
