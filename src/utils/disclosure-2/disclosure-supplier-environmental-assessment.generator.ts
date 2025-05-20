import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureSupplierEnvironmental(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow(
          'Supplier Environmental Assessment',
          [
            'G1-2_02, GRI 308',
            'G1-2_03, GRI 308-1, GRI 308-2',
            'ESRS 2 SBM-3_04, ESRS 2 SBM-3_07',
          ],
          true,
        ),
      ],
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 70, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Qualitative Data')],
            }),
            new TableCell({children: []}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of new suppliers that were screened using environmental criteria',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.screenedPercentage ?? '')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph(''),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 70, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Qualitative Data')],
            }),
            new TableCell({children: []}),
          ],
        }),
      ],
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Number of suppliers assessed for environmental impacts.',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.assessedSuppliers ?? '')],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Actual Negative Impacts',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({children: []}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Number of suppliers identified as having significant actual negative environmental impacts.',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.actualNegativeCount ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of suppliers identified as having significant actual negative environmental impacts with which improvements were agreed upon as a result of assessment.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.actualNegativeImprovedPercent ?? ''),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of suppliers identified as having significant actual negative environmental impacts with which relationships were terminated as a result of assessment, and why.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.actualNegativeTerminatedPercent ?? ''),
              ],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Potential negative Impacts',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({children: []}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Number of suppliers identified potential negative environmental impacts.',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.potentialNegativeCount ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of suppliers identified potential negative environmental impacts with which improvements were agreed upon as a result of assessment.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.potentialNegativeImprovedPercent ?? ''),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of suppliers identified potential negative environmental impacts with which relationships were terminated as a result of assessment, and why.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.potentialNegativeTerminatedPercent ?? ''),
              ],
            }),
          ],
        }),
      ],
    }),

    ...emptyTable({}),
  ];
}
