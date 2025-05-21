import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWorkRelatedIllHealth(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Work-related ill health', [
          'S1-4_01',
          'S1-14_02',
          'S1-14_03',
          'S1-14_06',
          'S1-14_08',
          'S1-14_12',
          'GRI 403-10',
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
              columnSpan: 2,
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'For Full-time Employees', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        ...[
          'The number of fatalities as a result of work-related ill health',
          'The number of cases of recordable work-related ill health',
          'The main types of work-related ill health',
        ].map(
          text =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(text)],
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
              columnSpan: 2,
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'For Workers', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...[
          'The number of fatalities as a result of work-related ill health',
          'The number of cases of recordable work-related ill health',
          'The main types of work-related ill health',
        ].map(
          text =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(text)],
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
