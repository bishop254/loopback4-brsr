import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

export function generateDisclosure2_3(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-3: Reporting period, frequency and contact point',
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
        ...[
          ['Reporting period', data?.reportingPeriod],
          ['Frequency of reporting', data?.reportingFrequency],
          ['Financial reporting year', data?.financialYear],
          ['The report is published on', data?.reportPublicationDate],
          [
            'In case of any feedback or any queries, stakeholders can contact:',
            data?.contactPoint,
          ],
        ].map(
          ([label, value]) =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph({text: label})],
                }),
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph({text: value ?? '-'})],
                }),
              ],
            }),
        ),
      ],
    }),
  ];
}
