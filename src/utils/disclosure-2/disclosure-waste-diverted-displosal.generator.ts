import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWasteDiverted(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Waste diverted from disposal', [
          'GRI 306-4',
          'E5-5_08',
          'E5-5_12',
          'E5-5_13',
          'E5-5_14',
          'E5-5_17',
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
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Qualitative data', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Data', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph('Total weight of waste diverted from disposal'),
              ],
            }),
            new TableCell({children: [new Paragraph('Metric tons')]}),
            new TableCell({children: [new Paragraph('')]}),
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
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total weight of waste diverted from disposal',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Data', bold: true})],
                }),
              ],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Hazardous waste')]}),
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        ...[
          'Preparation for reuse',
          'Recycling',
          'Other recovery operations',
          'Onsite',
          'Offsite',
        ].map(
          item =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(item)]}),
                new TableCell({children: [new Paragraph('Metric tons')]}),
                new TableCell({children: [new Paragraph('')]}),
              ],
            }),
        ),

        // Non-hazardous Waste
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Non-hazardous waste')]}),
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        ...[
          'Preparation for reuse',
          'Recycling',
          'Other recovery operations',
          'Onsite',
          'Offsite',
        ].map(
          item =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(item)]}),
                new TableCell({children: [new Paragraph('Metric tons')]}),
                new TableCell({children: [new Paragraph('')]}),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
