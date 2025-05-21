import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosurePreventionMitigationOccupationalHealthSafetyImpacts(
  data: any,
) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow(
          'Prevention and mitigation of occupational health and safety impacts',
          ['S2-4_01', 'GRI 403-7 '],
        ),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
