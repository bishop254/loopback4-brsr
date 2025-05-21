import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWasteGenerated(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Waste generated', [
          'GRI 306-3',
          'E5-5_07',
          'E5-5_12',
          'E5-5_13',
          'E5-5_14',
          'E5-5_17',
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
                    new TextRun({text: 'Unit of Measurement', bold: true}),
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
              children: [new Paragraph('Total weight of waste generated')],
            }),
            new TableCell({children: [new Paragraph('Metric tons')]}),
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
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Waste category', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Total weight', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Hazardous')]}),
            new TableCell({children: [new Paragraph('Metric tons')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Non-hazardous')]}),
            new TableCell({children: [new Paragraph('Metric tons')]}),
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
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Sector-specific waste', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Total weight', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('Metric tons')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('Metric tons')]}),
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
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Material-specific waste', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Total weight', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('Metric tons')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('Metric tons')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
