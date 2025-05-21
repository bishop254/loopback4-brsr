import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureProductServiceQuality(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Product & service quality',
          [
            'GRI 417-1',
            'GRI 417-2',
            'S4-4_11',
            'GRI 417-3',
            'S4-4_11',
            'TR-AU-250a1',
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
                  'Percentage of significant product or service categories covered by and assessed for compliance with such procedures',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.procedureCompliancePercent ?? '')],
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
              columnSpan: 2,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total number of incidents of non-compliance with regulations and/or voluntary codes\nconcerning product and service information and labeling',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.totalLabelingIncidents ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'incidents of non-compliance with regulations resulting in a fine or penalty',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.labelingWithPenalty ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'incidents of non-compliance with regulations resulting in a warning',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.labelingWithWarning ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'incidents of non-compliance with voluntary codes',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.labelingWithVoluntary ?? '')],
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
              columnSpan: 2,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total number of incidents of non-compliance with regulations and/or voluntary codes\nconcerning marketing communications, including advertising, promotion, and sponsorship',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.totalMarketingIncidents ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'incidents of non-compliance with regulations resulting in a fine or penalty',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.marketingWithPenalty ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'incidents of non-compliance with regulations resulting in a warning',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.marketingWithWarning ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'incidents of non-compliance with voluntary codes',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.marketingWithVoluntary ?? '')],
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
                  children: [new TextRun({text: 'Metric', bold: true})],
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
                  'Percentage of vehicle models rated by NCAP with an overall 5-star safety rating, by region',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.vehicleSafetyRating ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph('Number of safety-related defect complaints'),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.vehicleSafetyRating ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Percentage investigated')],
            }),
            new TableCell({
              children: [new Paragraph(data?.vehicleSafetyRating ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Number of vehicles recalled')],
            }),
            new TableCell({
              children: [new Paragraph(data?.vehicleSafetyRating ?? '')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
