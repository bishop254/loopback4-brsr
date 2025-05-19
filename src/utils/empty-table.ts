import {
  BorderStyle,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  WidthType,
} from 'docx';

export function emptyTable(data: any) {
  return [
    new Paragraph({
      text: '',
    }),
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [new Paragraph({text: data})],
              borders: {
                top: {style: BorderStyle.SINGLE, size: 1, color: '000000'},
                bottom: {style: BorderStyle.SINGLE, size: 1, color: '000000'},
                left: {style: BorderStyle.SINGLE, size: 1, color: '000000'},
                right: {style: BorderStyle.SINGLE, size: 1, color: '000000'},
              },
            }),
          ],
        }),
      ],
    }),
    new Paragraph({
      text: '',
    }),
  ];
}
