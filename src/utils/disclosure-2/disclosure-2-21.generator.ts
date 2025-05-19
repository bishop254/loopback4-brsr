import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

export function generateDisclosure2_21(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-21 Annual total compensation ratio',
      heading: HeadingLevel.HEADING_2,
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Response', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'ratio of the annual total compensation for the organization’s highest-paid individual to the median annual total compensation for all employees',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.compensationRatio ?? '')],
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
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Response', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'percentage increase in annual total compensation for the organization’s highest-paid individual to the median percentage increase in annual total compensation for all employees',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.compensationIncreaseComparison ?? ''),
              ],
            }),
          ],
        }),
      ],
    }),
  ];
}
