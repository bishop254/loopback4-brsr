import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

export function generateDisclosure3_2(data: any) {
  const rows = (data?.materialTopics ?? []).map((item: any) => {
    return new TableRow({
      children: [
        new TableCell({
          width: {size: 50, type: WidthType.PERCENTAGE},
          children: [new Paragraph(item.topic ?? '')],
        }),
        new TableCell({
          width: {size: 50, type: WidthType.PERCENTAGE},
          children: [new Paragraph(item.priority ?? '')],
        }),
      ],
    });
  });

  return [
    new Paragraph({
      text: 'Disclosure 3-2 List of material topics',
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
                  children: [
                    new TextRun({text: 'List of Material Topics', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Priority', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...rows,
      ],
    }),
    new Paragraph({
      text: '',
    }),
  ];
}
