import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureAirEmissions(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions',
          ['E2-4_01', 'E2-4_02', 'E2-4_09', 'E2-4_08', 'E2-4_10', 'GRI 305-7'],
        ),
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
                    new TextRun({text: 'Quantitative data', bold: true}),
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
            new TableCell({children: [new Paragraph('NOx')]}),
            new TableCell({
              children: [new Paragraph('kilograms or multiples')],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('SOx')]}),
            new TableCell({
              children: [new Paragraph('kilograms or multiples')],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Persistent organic pollutants (POP)')],
            }),
            new TableCell({
              children: [new Paragraph('kilograms or multiples')],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Volatile organic compounds (VOC)')],
            }),
            new TableCell({
              children: [new Paragraph('kilograms or multiples')],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Hazardous air pollutants (HAP)')],
            }),
            new TableCell({
              children: [new Paragraph('kilograms or multiples')],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Particulate matter (PM)')],
            }),
            new TableCell({
              children: [new Paragraph('kilograms or multiples')],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Other standard categories of air emissions identified in relevant regulations',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph('kilograms or multiples')],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
