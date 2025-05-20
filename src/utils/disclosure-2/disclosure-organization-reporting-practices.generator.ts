import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureOrganizationReportingPractices(data: any) {
  return [
    new Paragraph({
      text: 'The organization and its reporting practices',
      heading: HeadingLevel.HEADING_1,
    }),

    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [generateTitleRow('Organizational details', ['GRI 2-1'])],
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

    new Paragraph({text: ''}),
  ];
}
