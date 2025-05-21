import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureCustomerImpact(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Impact on Customers',
          [
            'S4-2_01 to S4-2_09',
            'S4-3_10',
            'S4-3_13',
            'S4-4_01 to S4-4_18',
            'S4-5_01 to S4-5_06',
            'GRI 416-1',
            'GRI 416-2',
            'S4-4_11',
          ],
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
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of significant product and service categories for which health and safety impacts are assessed for improvement',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.healthSafetyAssessmentPercent ?? ''),
              ],
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
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total number of incidents of non-compliance with regulations and/or voluntary codes\nconcerning the health and safety impacts of products and services',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.totalIncidents ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'incidents of non-compliance with regulations resulting in a fine or penalty',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.incidentsWithPenalty ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'incidents of non-compliance with regulations resulting in a warning',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.incidentsWithWarning ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'incidents of non-compliance with voluntary codes',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.incidentsWithVoluntaryCodes ?? ''),
              ],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
