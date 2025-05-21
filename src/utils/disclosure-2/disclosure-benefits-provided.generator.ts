import {
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureBenefitsProvided(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Benefits provided to workforce', [
          'S1-11_01 to S1-11_11',
          'GRI 401-2',
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
              rowSpan: 2,
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Number of employees receiving benefits',
                      bold: true,
                    }),
                  ],
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
              columnSpan: 2,
              width: {size: 60, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Full-time Employee', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Male', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Female', bold: true})],
                }),
              ],
            }),
          ],
        }),

        ...[
          'Life insurance',
          'Health care',
          'Disability and invalidity coverage',
          'Parental leave',
          'Retirement provision',
          'Stock ownership',
          'Other',
        ].map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 40, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('')],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('')],
                }),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
