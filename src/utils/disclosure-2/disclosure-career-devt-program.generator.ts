import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureCareerDevelopment(data: any) {
  const createHeaderRow = () =>
    new TableRow({
      children: [
        new TableCell({
          width: {size: 40, type: WidthType.PERCENTAGE},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: '% of total employees who received a\nregular performance and career development review',
                  bold: true,
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: {size: 30, type: WidthType.PERCENTAGE},
          children: [
            new Paragraph({
              children: [new TextRun({text: 'Male', bold: true})],
            }),
          ],
        }),
        new TableCell({
          width: {size: 30, type: WidthType.PERCENTAGE},
          children: [
            new Paragraph({
              children: [new TextRun({text: 'Female', bold: true})],
            }),
          ],
        }),
      ],
    });

  const createDataRow = (label: string) =>
    new TableRow({
      children: [
        new TableCell({
          width: {size: 40, type: WidthType.PERCENTAGE},
          children: [new Paragraph(label)],
        }),
        new TableCell({
          width: {size: 30, type: WidthType.PERCENTAGE},
          children: [new Paragraph('')],
        }),
        new TableCell({
          width: {size: 30, type: WidthType.PERCENTAGE},
          children: [new Paragraph('')],
        }),
      ],
    });

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Career development programs', [
          'S1-13_01',
          'S1-13_02',
          'S1-13_05',
          'S1-13_06',
          'GRI 404-3',
        ]),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        createHeaderRow(),
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 3,
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Permanent employees', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        ...[
          'Senior Management',
          'Middle Management',
          'Entry-Level Employees',
        ].map(createDataRow),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        createHeaderRow(),
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 3,
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Temporary Employees', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        ...[
          'Senior Management',
          'Middle Management',
          'Entry-Level Employees',
        ].map(createDataRow),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
