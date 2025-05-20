import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureSupplierSocialAssessment(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Supplier Social Assessment', [
          'GRI 414-1',
          'G1-2_03',
          'ESRS 2',
          'SBM-3_04',
          'SBM-3_07',
          'GRI 414-2',
        ]),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particular', bold: true})],
                }),
              ],
            }),
            new TableCell({
              children: [],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of new suppliers that were screened using social criteria.',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.screenedSocialPercentage ?? '')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particular', bold: true})],
                }),
              ],
            }),
            new TableCell({
              children: [],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Number of suppliers assessed for social impacts',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.assessedSuppliersSocial ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Number of suppliers identified as having significant actual and potential negative social impacts.',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.identifiedNegativeSocial ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of suppliers identified as having significant actual and potential negative social impacts with which improvements were agreed upon as a result of assessment',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.socialImprovedPercent ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of suppliers identified as having significant actual and potential negative social impacts with which relationships were terminated as a result of assessment, and why',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.socialTerminatedPercent ?? '')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
