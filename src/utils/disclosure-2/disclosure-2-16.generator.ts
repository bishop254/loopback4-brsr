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

export function generateDisclosure2_16(data: any) {
  const rows = [
    ['total number of critical concerns', data?.totalConcerns],
    [
      'nature of critical concerns that were communicated to the highest governance body during the reporting period',
      data?.natureOfConcerns,
    ],
  ];

  return [
    new Paragraph({
      text: 'Disclosure 2-16 Communication of critical concerns',
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
                  children: [new TextRun({text: 'Particular', bold: true})],
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
                new TableCell({
                  children: [new Paragraph(value ?? '')],
                }),
              ],
            }),
        ),
      ],
    }),
    ...emptyTable({}),
  ];
}
