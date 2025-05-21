import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureEnergyOutside(data: any) {
  const upstreamItems = [
    'Purchased goods and services',
    'Capital goods',
    'Fuel- and energy-related activities',
    'Upstream transportation and distribution',
    'Waste generated in operations',
    'Business travel',
    'Employee commuting',
    'Upstream leased assets',
    'Other upstream',
  ];

  const downstreamItems = [
    'Downstream transportation and distribution',
    'Processing of sold products',
    'Use of sold products',
    'End-of-life treatment of sold products',
    'Downstream leased assets',
    'Franchises',
    'Investments',
  ];

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Energy consumption outside of the organization', [
          'GRI 302-1',
          'E1-5_01',
          'E1-5_02',
          'E1-5_03',
          'E1-5_05',
          'E1-5_06',
          'E1-5_07',
          'E1-5_08',
          'E1-5_10',
          'E1-5_11',
          'E1-5_12',
          'E1-5_13',
          'E1-5_14',
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
                  children: [
                    new TextRun({text: 'Unite of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph('Energy consumption outside the organization'),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Joules or multiples')],
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
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unite of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Upstream categories')],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Joules or multiples')],
            }),
          ],
        }),
        ...upstreamItems.map(
          item =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(item)],
                }),
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('')],
                }),
              ],
            }),
        ),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Downstream categories')],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph('')],
            }),
          ],
        }),
        ...downstreamItems.map(
          item =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(item)],
                }),
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('')],
                }),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
