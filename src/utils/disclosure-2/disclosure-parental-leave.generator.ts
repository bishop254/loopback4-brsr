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

export function generateDisclosureParentalLeave(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Parental leave', [
          'S1-15_01 to S1-15_03',
          'GRI 401-3',
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
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Number of employees', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              columnSpan: 2,
              width: {size: 60, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Employee Category', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: ['Male', 'Female'].map(
            gender =>
              new TableCell({
                width: {size: 30, type: WidthType.PERCENTAGE},
                children: [
                  new Paragraph({
                    children: [new TextRun({text: gender, bold: true})],
                  }),
                ],
              }),
          ),
        }),
        ...[
          'Number of employees that were entitled to parental leave',
          'Number of employees that took parental leave',
          'Number of employees that returned to work in the reporting period after parental leave ended',
          'Total number of employees that returned to work after parental leave ended that were still employed 12 months after their return to work',
          'Return to work and retention rates of employees that took parental leave',
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
