import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureEmissionsGHG(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Emissions',
          [
            'E1-7_01 to E1_27',
            'E2.IRO-1_03',
            'E2.MDR-P_07-08',
            'E2.MDR-A_01-12',
            'E2-2_01',
            'E2.MDR-A_13-14',
            'E2.MDR-T_01-13',
            'GRI 305-1',
            'E1-4_19',
            'E1-6_1 to E1-6_35',
            'E1-4_19',
            'E1-6_1 to E1-6_35',
            'GRI 305-3',
            'E1-4_19',
            'E1-6_1 to E1-6_35',
          ],
          true,
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
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Quantitative Data', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Baseline year', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'FY 2023', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Stationary Combustion Emission')],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions in metric tons of CO2 equivalent.',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Mobile Combustion Emission')],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions in metric tons of CO2 equivalent.',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Fugitive Emissions')]}),
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions in metric tons of CO2 equivalent.',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Process Emissions')]}),
            new TableCell({
              children: [
                new Paragraph(
                  'GHG emissions in metric tons of CO2 equivalent.',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
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
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Quantitative Data', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Baseline year', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'FY 2023', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph('Energy Purchased from Third party sources'),
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
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Quantitative Data', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Base line year', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'FY 2023', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...[
          'Energy Purchased from Third party sources',
          'Category 1 - Purchased goods and services',
          'Category 2 - Capital goods',
          'Category 3 - Fuel- and energy-related activities',
          'Category 4 - Upstream transportation and distribution',
          'Category 5 - Waste generated in operations',
          'Category 6 - Business travel',
          'Category 7 - Employee commuting',
          'Category 8 - Upstream leased assets',
          'Category 9 - Downstream transportation and distribution',
          'Category 10 - Processing of sold products',
          'Category 11 - Use of sold products',
          'Category 12 - End-of-life treatment of sold products',
          'Category 13 - Downstream leased assets',
          'Category 14 - Franchises',
          'Category 15 - Investments',
        ].map(
          label =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({
                  children: [
                    new Paragraph(
                      'GHG emissions in metric tons of CO2 equivalent.',
                    ),
                  ],
                }),
                new TableCell({children: [new Paragraph('')]}),
                new TableCell({children: [new Paragraph('')]}),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
