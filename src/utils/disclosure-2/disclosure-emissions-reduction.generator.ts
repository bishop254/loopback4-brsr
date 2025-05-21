import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureGHGReduction(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Reduction of GHG emissions', [
          'GRI 305-5',
          'E1-3_03',
          'E1-4_03',
          'E1-4_06',
          'E1-4_09',
          'E1-4_12',
          'E1-4_15',
          'E1-4_25',
          'E1-7_02',
          'TR-AU-410a',
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
                  'GHG emissions reduced as a direct result of reduction initiatives',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions in metric tons of CO2 equivalent.',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph('GHG emissions reduced in Scope 1 emissions'),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions in metric tons of CO2 equivalent.',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph('GHG emissions reduced in Scope 2 emissions'),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions in metric tons of CO2 equivalent.',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph('GHG emissions reduced in Scope 3 emissions'),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions in metric tons of CO2 equivalent.',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
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
                  children: [new TextRun({text: 'Metric', bold: true})],
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
        ...[
          'Sales-weighted average passenger fleet',
          ' fuel economy, by region',
          'Number of zero emission vehicles (ZEV)',
          'Hybrid vehicles',
          'Plug-in hybrid vehicles sold',
          'Discussion of strategy for managing fleet fuel economy and emissions risks and opportunities',
        ].map(
          text =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(text)]}),
                new TableCell({children: [new Paragraph('')]}),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
