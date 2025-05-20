import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureCollectiveBargainingAgreements(data: any) {
  const rows = [
    [
      'Percentage of total employees covered by collective bargaining agreements;',
      data?.percentageCovered,
    ],
    ['Number of work stoppages', data?.percentageCovered],
    ['Total days idle', data?.percentageCovered],
  ];

  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Collective bargaining agreements', [
          'TR-AU-310a',
          'GRI 2-30',
          'S1-8_01',
          'S1-8_02',
          'S1-8_03',
          'S1-8_04',
          'S1-8_08',
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
                  children: [new TextRun({text: 'Response', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...rows.map(
          ([label, value]) =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({children: [new Paragraph(value ?? '')]}),
              ],
            }),
        ),
      ],
    }),

    ...emptyTable({}),
  ];
}
