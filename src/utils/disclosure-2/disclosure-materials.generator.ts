import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureMaterials(data: any) {
  return [
    new Paragraph({
      text: 'Environment',
      heading: HeadingLevel.HEADING_1,
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Materials',
          [
            'GRI 301-1',
            'GRI 301-2',
            'GRI 301-3',
            'E5-4_01 to E5-4_08',
            'E5-5_01 to E5-5_06',
            'TR-AU-440a.',
            'TR-AU-440b.',
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
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Materials', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'non-renewable materials', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 34, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'renewable materials', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'Weight /Volume of materials that are used to produce',
                ),
              ],
            }),
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [new Paragraph(data?.nonRenewableProduced ?? '')],
            }),
            new TableCell({
              width: {size: 34, type: WidthType.PERCENTAGE},
              children: [new Paragraph(data?.renewableProduced ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'Weight /Volume of materials that are used to package',
                ),
              ],
            }),
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [new Paragraph(data?.nonRenewablePackaged ?? '')],
            }),
            new TableCell({
              width: {size: 34, type: WidthType.PERCENTAGE},
              children: [new Paragraph(data?.renewablePackaged ?? '')],
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
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particular', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: '', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  "Percentage of recycled input materials used to manufacture the organization's primary products and services.",
                ),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph(data?.recycledInputPercentage ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph('Minimum recyclability of vehicles sold'),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph(data?.vehicleRecyclability ?? '')],
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
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Product category', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Percentage of reclaimed products and their packaging materials',
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
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('')],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('')],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
