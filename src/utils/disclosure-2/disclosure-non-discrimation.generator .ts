import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureNonDiscrimination(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Non-discrimination', [
          'GRI 406-1',
          'S1-17_01',
          'S1-17_02',
          'S1-17_13',
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
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total number of incidents of discrimination during the reporting period.',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.incidentsOfDiscrimination ?? '')],
            }),
          ],
        }),
      ],
    }),

    ...emptyTable({}),
  ];
}
