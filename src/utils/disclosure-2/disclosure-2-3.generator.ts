import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosure2_3(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Reporting period, frequency and contact point', [
          'GRI 2-3',
          'ESRS 1 73',
        ]),
      ],
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
