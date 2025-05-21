import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureODS(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Emissions of ozone-depleting substances (ODS)', [
          'GRI 305-6',
          'E2-5_01 to E2-5_13',
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
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Quantitative Data', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Data Input', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Production of ODS')]}),
            new TableCell({
              children: [
                new Paragraph(
                  'metric tons of CFC-11 (trichlorofluoromethane) equivalent',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Import of ODS')]}),
            new TableCell({
              children: [
                new Paragraph(
                  'metric tons of CFC-11 (trichlorofluoromethane) equivalent',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Export of ODS')]}),
            new TableCell({
              children: [
                new Paragraph(
                  'metric tons of CFC-11 (trichlorofluoromethane) equivalent',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
      ],
    }),

    ...emptyTable({}),
  ];
}
