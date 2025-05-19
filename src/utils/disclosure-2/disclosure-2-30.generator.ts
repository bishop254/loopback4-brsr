import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_30(data: any) {
  const rows = [
    [
      'Percentage of total employees covered by collective bargaining agreements;',
      data?.percentageCovered,
    ],
  ];

  return [
    new Paragraph({
      text: 'Disclosure 2-30 Collective bargaining agreements',
      heading: HeadingLevel.HEADING_2,
    }),
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Response', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...rows.map(
          ([label, value]) =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({children: [new Paragraph(value ?? '')]}),
              ],
            }),
        ),
      ],
    }),
    ...emptyTable({}),
  ];
}
