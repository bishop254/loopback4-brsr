import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureChildLabor(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Child Labor', [
          'S1.SBM-3_01 to S1.SBM-3_06',
          'S1-1_06',
          'S1-1_08',
          'S1-1_10',
          'S1-1_13',
          'S2-2_01',
          'GRI 408-1',
          'S1.SBM-3_09',
          'S1.SBM-3_10',
          'S1-1_08',
          'S2-1_07',
          'S2-1_09',
        ]),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particular', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Response', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Number of incidences of child labor')],
            }),
            new TableCell({
              children: [new Paragraph(data?.childLaborIncidents ?? '')],
            }),
          ],
        }),
      ],
    }),

    ...emptyTable({}),
  ];
}
