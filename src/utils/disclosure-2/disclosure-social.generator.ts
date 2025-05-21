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

export function generateDisclosureSocial(data: any) {
  return [
    new Paragraph({
      text: 'Social',
      heading: HeadingLevel.HEADING_1,
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Employment', ['GRI 401-1', 'S1-6_11', 'S1-6_12']),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              rowSpan: 2,
              width: {size: 20, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: '401-1 New Employee hire', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              columnSpan: 3,
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Male', bold: true})],
                }),
              ],
            }),
            new TableCell({
              columnSpan: 3,
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Female', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            ...[
              'Under 30 Years',
              '30-50 Years',
              'Above 50 Years',
              'Under 30 Years',
              '30-50 Years',
              'Above 50 Years',
            ].map(text => new TableCell({children: [new Paragraph({text})]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Permanent employees')]}),
            ...Array(6)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Temporary employees')]}),
            ...Array(6)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
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
              rowSpan: 2,
              width: {size: 20, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: '401-1 Number of employees left the organization',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              columnSpan: 3,
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Male', bold: true})],
                }),
              ],
            }),
            new TableCell({
              columnSpan: 3,
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Female', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            ...[
              'Under 30 Years',
              '30-50 Years',
              'Above 50 Years',
              'Under 30 Years',
              '30-50 Years',
              'Above 50 Years',
            ].map(text => new TableCell({children: [new Paragraph({text})]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Permanent employees')]}),
            ...Array(6)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Temporary employees')]}),
            ...Array(6)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
