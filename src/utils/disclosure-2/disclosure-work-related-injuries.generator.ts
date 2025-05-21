import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWorkRelatedInjuries(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Work-related injuries', [
          'S1-4_01',
          'S1-14_02',
          'S1-14_03',
          'S1-14_04',
          'S1-14_05',
          'S1-14_07',
          'S1-14_09',
          'S2-1_05',
          'S2.SBM-3_04',
          'GRI 403-9',
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
          'The number and rate of fatalities as a result of work-related injury',
          'The number and rate of high-consequence work-related injuries (excluding fatalities)',
          'The number and rate of recordable work-related injuries',
          'The main types of work-related injury',
          'The number of hours worked',
        ].map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
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
          'The number and rate of fatalities as a result of work-related injury',
          'The number and rate of high-consequence work-related injuries (excluding fatalities)',
          'The number and rate of recordable work-related injuries',
          'The main types of work-related injury',
          'The number of hours worked',
        ].map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
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
                  children: [
                    new TextRun({text: 'Calculated values', bold: true}),
                  ],
                }),
              ],
            }),
          ],
        }),
        ...[
          'Rate of fatalities as a result of work-related injury',
          'Rate of recordable work-related injuries',
          'Rate of high-consequence work-related injuries',
        ].map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
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
