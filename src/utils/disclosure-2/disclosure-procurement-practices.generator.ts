import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureProcurementPractices(data: any) {
  const rows = [
    [
      '% of products and services purchased locally (% procurement budget spent on local supplier)',
      data?.location1Row1,
      data?.location2Row1,
    ],
    ['', data?.location1Row2, data?.location2Row2],
    ['', data?.location1Row3, data?.location2Row3],
  ];

  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [generateTitleRow('Procurement Practices', ['GRI 204-1'], true)],
    }),

    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: '% of products and services purchased locally (% procurement budget spent on local supplier)',
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
                  children: [new TextRun({text: 'Location 1', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Location 2', bold: true})],
                }),
              ],
            }),
          ],
        }),

        ...rows.map(
          ([label, loc1, loc2]) =>
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  children: [new Paragraph(loc1 ?? '')],
                }),
                new TableCell({
                  children: [new Paragraph(loc2 ?? '')],
                }),
              ],
            }),
        ),
      ],
    }),

    ...emptyTable({}),
  ];
}
