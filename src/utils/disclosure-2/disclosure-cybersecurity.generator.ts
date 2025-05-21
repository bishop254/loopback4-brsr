import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureDataPrivacy(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Cybersecurity and data privacy',
          ['GRI 418-1', 'S4-3_05', 'S4-3_13', 'S4-4_11'],
          true,
        ),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Particular',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Response',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              columnSpan: 2,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total number of substantiated complaints received concerning breaches of customer privacy',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.totalPrivacyComplaints ?? '')],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'complaints received from outside parties and substantiated by the organization',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.externalComplaints ?? '')],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('complaints from regulatory bodies')],
            }),
            new TableCell({
              children: [new Paragraph(data?.regulatoryComplaints ?? '')],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total number of identified leaks, thefts, or losses of customer data',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.dataLossIncidents ?? '')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
