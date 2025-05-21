import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWaterDischarge(data: any) {
  const dischargeByDestination = [
    'Surface water',
    'Groundwater',
    'Seawater',
    'Third-party water (total)',
    'Third-party water sent for use to other organizations',
  ];

  const dischargeByFreshOther = [
    'Freshwater (≤1,000 mg/L Total Dissolved Solids)',
    'Other water (>1,000 mg/L Total Dissolved Solids)',
  ];

  const dischargeByTreatment = [
    'No treatment',
    'Treatment level [Provide the title for treatment level]',
    'Treatment level [Provide the title for treatment level]',
    'Treatment level [Provide the title for treatment level]',
  ];

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [generateTitleRow('Water discharge', ['GRI 303-4', 'E3-4_12'])],
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
                      text: 'Water discharge [GRI 303-4]',
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
              width: {size: 100, type: WidthType.PERCENTAGE},
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Water discharge by destination',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        ...dischargeByDestination.map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 40, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('X')],
                }),
              ],
            }),
        ),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Total water discharge', bold: true}),
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
              children: [
                new Paragraph(
                  'Surface water + groundwater + seawater + third-party water (total)',
                ),
              ],
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
              width: {size: 100, type: WidthType.PERCENTAGE},
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Water discharge by freshwater and other water',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        ...dischargeByFreshOther.map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 40, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('X')],
                }),
              ],
            }),
        ),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Water discharge by level of treatment Note that this is recommended, but not required',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        ...dischargeByTreatment.map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 40, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('X')],
                }),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
