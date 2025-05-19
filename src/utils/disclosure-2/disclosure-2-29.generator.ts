import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

export function generateDisclosure2_29(data: any) {
  const rows = (data?.engagements ?? []).map((entry: any) => {
    return new TableRow({
      children: [
        new TableCell({
          width: {size: 25, type: WidthType.PERCENTAGE},
          children: [new Paragraph(entry.stakeholder ?? '')],
        }),
        new TableCell({
          width: {size: 25, type: WidthType.PERCENTAGE},
          children: [new Paragraph(entry.process ?? '')],
        }),
        new TableCell({
          width: {size: 25, type: WidthType.PERCENTAGE},
          children: [new Paragraph(entry.objective ?? '')],
        }),
        new TableCell({
          width: {size: 25, type: WidthType.PERCENTAGE},
          children: [new Paragraph(entry.frequency ?? '')],
        }),
      ],
    });
  });

  return [
    new Paragraph({
      text: 'Disclosure 2-29 Approach to stakeholder engagement',
      heading: HeadingLevel.HEADING_2,
    }),
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: ['Stakeholder', 'Process', 'Objective', 'Frequency'].map(
            header =>
              new TableCell({
                width: {size: 25, type: WidthType.PERCENTAGE},
                children: [
                  new Paragraph({
                    children: [new TextRun({text: header, bold: true})],
                  }),
                ],
              }),
          ),
        }),
        ...rows,
      ],
    }),
  ];
}
