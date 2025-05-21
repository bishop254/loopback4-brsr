import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWaterWithdrawal(data: any) {
  const waterSources = [
    'Surface water (total)',
    'Freshwater (≤1,000 mg/L Total Dissolved Solids)',
    'Other water (>1,000 mg/L Total Dissolved Solids)',
    'Groundwater (total)',
    'Freshwater (≤1,000 mg/L Total Dissolved Solids)',
    'Other water (>1,000 mg/L Total Dissolved Solids)',
    'Seawater (total)',
    'Freshwater (≤1,000 mg/L Total Dissolved Solids)',
    'Other water (>1,000 mg/L Total Dissolved Solids)',
    'Produced water (total)',
    'Freshwater (≤1,000 mg/L Total Dissolved Solids)',
    'Other water (>1,000 mg/L Total Dissolved Solids)',
    'Produced water (total)',
    'Freshwater (≤1,000 mg/L Total Dissolved Solids)',
    'Other water (>1,000 mg/L Total Dissolved Solids)',
  ];

  const thirdPartySources = [
    'Surface water',
    'Groundwater',
    'Seawater',
    'Produced water',
  ];

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [generateTitleRow('Water withdrawal', ['E3-4_11'])],
    }),

    ...emptyTable({}),

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
                      text: 'Water withdrawal [GRI 303-3]',
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
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Water withdrawal by source',
                      bold: true,
                    }),
                  ],
                }),
              ],
              columnSpan: 3,
            }),
          ],
        }),

        ...waterSources.map(
          source =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 40, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(source)],
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
        ),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total third-party water withdrawal by withdrawal source',
                      bold: true,
                    }),
                  ],
                }),
              ],
              columnSpan: 3,
            }),
          ],
        }),

        ...thirdPartySources.map(
          source =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 40, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(source)],
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
        ),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Total water withdrawal', bold: true}),
                  ],
                }),
              ],
              columnSpan: 3,
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'Surface water (total) + groundwater (total) + seawater (total) + produced water (total) + third-party water (total)',
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
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
