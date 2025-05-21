import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureBasicSalaryRemuneration(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Basic salary and remuneration', [
          'S1-16_01',
          'S1-16_04',
          'S1-16_05',
          'GRI 405-2',
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
                  children: [
                    new TextRun({
                      text: 'Ratio of the basic salary and remuneration of women to men',
                      bold: true,
                    }),
                  ],
                }),
              ],
              columnSpan: 3,
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Employee Category', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Male', bold: true})],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Female', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...[
          'Senior Management',
          'Middle Management',
          'Entry-level employees',
        ].map(
          category =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(category)]}),
                new TableCell({
                  children: [new Paragraph(data?.[category]?.male ?? '')],
                }),
                new TableCell({
                  children: [new Paragraph(data?.[category]?.female ?? '')],
                }),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
