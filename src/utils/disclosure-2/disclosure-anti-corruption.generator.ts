import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureAntiCorruption(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Anti-Corruption',
          [
            'G1-1_03 to G1-1_12',
            'GRI 205-1',
            'G1-3_01',
            'G1-3_02',
            'GRI 205-2',
            'G1-3_05 to G1-3_09',
            'G1-4_03',
            'GRI 205-3',
            'G1-4_04',
            'G1-4_08',
            'G1-4_01',
            'G1-4_02',
          ],
          true,
        ),
      ],
    }),

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
                  'Total number of operations assessed for risks related to corruption.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.corruptionAssessmentCount ?? 'MT'),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Percentage of operations assessed for risks related to corruption.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.corruptionAssessmentPercent ?? ''),
              ],
            }),
          ],
        }),
      ],
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Category', bold: true})],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Governance body members', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Employees', bold: true})],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Business partner', bold: true}),
                  ],
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
                  'Total number of whom the organization’s anticorruption policies and procedures have been communicated',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.governanceTotalCommunicated ?? ''),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.employeesTotalCommunicated ?? '')],
            }),
            new TableCell({
              children: [new Paragraph(data?.partnersTotalCommunicated ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  '% of whom the organization’s anticorruption policies and procedures have been communicated',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.governancePercentCommunicated ?? ''),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.employeesPercentCommunicated ?? ''),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.partnersPercentCommunicated ?? ''),
              ],
            }),
          ],
        }),
      ],
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Governance body members')],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total number of whom received training on anticorruption',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: '% of whom received training on anticorruption',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        ...['Location 1', 'Location 2'].map(
          (loc, i) =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(loc)]}),
                new TableCell({
                  children: [
                    new Paragraph(
                      data?.[`governanceTrainedTotal${i + 1}`] ?? '',
                    ),
                  ],
                }),
                new TableCell({
                  children: [
                    new Paragraph(
                      data?.[`governanceTrainedPercent${i + 1}`] ?? '',
                    ),
                  ],
                }),
              ],
            }),
        ),
      ],
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Employee Category')]}),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total number of whom received training on anticorruption',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: '% of whom received training on anticorruption',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        ...[
          ['Senior management', 'senior'],
          ['Mid-level management', 'mid'],
          ['Entry level employees', 'entry'],
        ].map(
          ([label, key]) =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({
                  children: [new Paragraph(data?.[`${key}TotalTrained`] ?? '')],
                }),
                new TableCell({
                  children: [
                    new Paragraph(data?.[`${key}PercentTrained`] ?? ''),
                  ],
                }),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({
      children: [
        new TextRun({
          text: 'Nature of confirmed incidents of corruption.',
          bold: true,
        }),
      ],
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
            }),
            new TableCell({children: []}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total number of confirmed incidents of corruption',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.confirmedTotal ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total number of confirmed incidents in which employees were dismissed or disciplined for corruption',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.confirmedDismissed ?? '')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total number of confirmed incidents when contracts with business partners were terminated or not renewed due to violations related to corruption.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.confirmedTerminatedPartners ?? ''),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Public legal cases regarding corruption brought against the organization or its employees during the reporting period and the outcomes of such cases.',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.confirmedLegalCases ?? '')],
            }),
          ],
        }),
      ],
    }),
  ];
}
