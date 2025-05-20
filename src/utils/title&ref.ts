import {
  AlignmentType,
  BorderStyle,
  HeadingLevel,
  Paragraph,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

const noBorders = {
  top: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  bottom: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  left: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  right: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
};

export function generateTitleRow(
  title: string,
  refs: string[],
  isHeading: boolean = false,
): TableRow {
  return new TableRow({
    children: [
      new TableCell({
        width: {size: 85, type: WidthType.PERCENTAGE},
        children: [
          !isHeading
            ? new Paragraph({
                alignment: AlignmentType.LEFT,
                children: [
                  new TextRun({
                    text: title,
                    bold: true,
                  }),
                ],
              })
            : new Paragraph({
                alignment: AlignmentType.LEFT,
                heading: HeadingLevel.HEADING_2,
                children: [
                  new TextRun({
                    text: title,
                    bold: true,
                  }),
                ],
              }),
        ],
        borders: noBorders,
      }),
      new TableCell({
        width: {size: 15, type: WidthType.PERCENTAGE},
        children: [
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: refs.map(
              (r, i) =>
                new TextRun({
                  text: r + (i < refs.length - 1 ? ', ' : ''),
                  color: '#ed7d31',
                  size: '5pt',
                }),
            ),
          }),
        ],
        borders: noBorders,
      }),
    ],
  });
}
