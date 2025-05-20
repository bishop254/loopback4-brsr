import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureCommunicationCriticalConcerns(data: any) {
  const rows = [
    ['total number of critical concerns', data?.totalConcerns],
    [
      'nature of critical concerns that were communicated to the highest governance body during the reporting period',
      data?.natureOfConcerns,
    ],
  ];

  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Communication of critical concerns', [
          'GRI 2-16',
          'ESRS 2 GOV-2_01',
          'ESRS 2 GOV-2_03',
          'G1-1_01,G1-3_03',
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
        ...rows.map(
          ([label, value]) =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({
                  children: [new Paragraph(value ?? '')],
                }),
              ],
            }),
        ),
      ],
    }),
    ...emptyTable({}),
  ];
}
