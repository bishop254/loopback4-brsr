import {
  AlignmentType,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureBiodiversity(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Biodiversity', [
          'GRI 304-1',
          'GRI 304-2',
          'GRI 304-3',
          'GRI 304-4',
          'E4-1_13 to E4-1_15',
          'SBM-4_06',
          'SBM-4_07',
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
              rowSpan: 2,
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
              rowSpan: 2,
              width: {size: 20, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Remarks', bold: true})],
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
              columnSpan: 3,
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'Operational Sites',
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
              width: {size: 13.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Owned', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 13.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Leased', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 13.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Managed', bold: true})],
                }),
              ],
            }),
          ],
        }),

        // Data Rows
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Geographic location')]}),
            new TableCell({children: [new Paragraph('')]}),
            ...Array(3)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Subsurface and underground land that may be owned',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
            ...Array(3)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Position in relation to the protected area or the high biodiversity value area outside protected areas',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  'In the area, adjacent to, or containing portions of the protected area or biodiversity value area outside protected area',
                ),
              ],
            }),
            ...Array(3)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Type of operation (office, manufacturing or production, or extractive)',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph('List all (if appropriate)')],
            }),
            ...Array(3)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Size of operational site in km2 (or another unit, if appropriate)',
                ),
              ],
            }),
            new TableCell({children: [new Paragraph('')]}),
            ...Array(3)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Biodiversity value characterized by the attribute of the protected area or area of high biodiversity value outside protected areas',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph('Terrestrial, freshwater or maritime ecosystem'),
              ],
            }),
            ...Array(3)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Biodiversity value characterized by listing of protected status',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(
                  'Such as IUCN Protected Area Management Categories, Ramsar Convention, national legislation',
                ),
              ],
            }),
            ...Array(3)
              .fill('')
              .map(() => new TableCell({children: [new Paragraph('')]})),
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
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Size', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Location', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Habitats protected')]}),
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Habitats restored')]}),
            new TableCell({children: [new Paragraph('')]}),
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
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Level of extinction list', bold: true}),
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
                      text: 'Total number of IUCN Red List species and national conservation list species',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        ...[
          'Critically endangered',
          'Endangered',
          'Vulnerable',
          'Near threatened',
          'Least concern',
        ].map(
          status =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(status)]}),
                new TableCell({children: [new Paragraph('')]}),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
