import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

export function generateDisclosure2_1(data: any) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: 'GRI 2',
          bold: true,
          size: 36,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: '1. The organization and its reporting practices',
          bold: true,
          size: 30,
        }),
      ],
    }),
    new Paragraph({
      text: 'Disclosure 2-1: Organizational details',
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: 'The organization shall:',
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
        ...[
          ['Legal Name', data.legalName],
          ['Ownership and Legal Form', data.ownershipForm],
          ['Headquarters', data.headquarters],
          ['Countries of Operation', data.countriesOfOperation],
        ].map(
          ([label, value]) =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(value ?? '-')],
                }),
              ],
            }),
        ),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'Table 1: The following table outlines the missing submissions and entities that were expected to contribute to this report:',
          italics: true,
        }),
      ],
    }),
    new Paragraph({
      text: '',
    }),
  ];
}
