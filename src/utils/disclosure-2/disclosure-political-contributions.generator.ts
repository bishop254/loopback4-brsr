import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosurePoliticalContributions(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Political contributions',
          [
            'G1-5_02',
            'G1-5_03',
            'G1-5_06',
            'G1-5_07',
            'G1-5_08',
            'G1-5_10',
            'G1-5_12',
            'GRI 415-1',
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
                  children: [new TextRun({text: '', bold: true})],
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
                  'Total monetary value of financial and in-kind political contributions made directly and indirectly by the organization by country and recipient/beneficiary.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.totalPoliticalContributions ?? ''),
              ],
            }),
          ],
        }),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
