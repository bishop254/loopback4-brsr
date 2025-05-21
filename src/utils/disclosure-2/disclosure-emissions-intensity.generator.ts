import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureGHGIntensity(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [generateTitleRow('GHG emissions intensity', ['GRI 305-4'])],
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
                  children: [new TextRun({text: 'Data', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions intensity ratio for the organization',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  '[Organization-specific metric (the denominator) chosen to calculate the ratio]',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph('')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total Emission Intensity for Scope 1: Direct Emissions',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph('(in tCO2e/organization specific metrics)'),
              ],
            }),
            new TableCell({
              children: [new Paragraph('')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total Emission Intensity for Scope 2: Indirect Emissions',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph('(in tCO2e/organization specific metrics)'),
              ],
            }),
            new TableCell({
              children: [new Paragraph('')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total Emission Intensity for Scope 3: Other Indirect Emissions',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph('(in tCO2e/organization specific metrics)'),
              ],
            }),
            new TableCell({
              children: [new Paragraph('')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
