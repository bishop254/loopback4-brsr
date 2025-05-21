import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWaterConsumption(data: any) {
  const withdrawalSources = [
    'Surface water',
    'Groundwater',
    'Seawater',
    'Produced water',
    'Third-party water',
  ];

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [generateTitleRow('Water consumption', ['E3-4_01 to E3-4_10'])],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Water consumption [GRI 303-5]',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'ALL AREAS', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'AREAS WITH WATER STRESS', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Total water consumption')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'Change in water storage, if water storage has been identified as having a significant water-related impact',
                ),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('-')],
            }),
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
                    new TextRun({
                      text: 'FACILITIES IN AREAS WITH WATER STRESS',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'FACILITY A', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'FACILITY B', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: '[FACILITY X]', bold: true})],
                }),
              ],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              columnSpan: 4,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Water withdrawal (clause 2.2.1)',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        ...withdrawalSources.map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 25, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  width: {size: 25, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
                new TableCell({
                  width: {size: 25, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
                new TableCell({
                  width: {size: 25, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
              ],
            }),
        ),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              columnSpan: 4,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Water consumption (clause 2.5.1)',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Total water consumption')],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
