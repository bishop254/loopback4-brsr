import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

export function generateDisclosure2_27(data: any) {
  const firstTableRows = [
    [
      'the total number of significant instances of non-compliance with laws and regulations during the reporting period,',
      data?.significantInstances,
    ],
    ['Number of instances for which fines were incurred;', data?.finesIncurred],
    [
      'Number of instances for which non-monetary sanctions were incurred;',
      data?.nonMonetarySanctions,
    ],
  ];

  const secondTableRows = [
    [
      'total number and the monetary value of fines for instances of noncompliance with laws and regulations that were paid during the reporting period',
      data?.finesPaid,
    ],
    [
      'Number of instances for fines for instances of non-compliance with laws and regulations that occurred in the current reporting period;',
      data?.currentPeriodFines,
    ],
    [
      'Number of instances for fines for instances of non-compliance with laws and regulations that occurred in previous reporting periods;',
      data?.previousPeriodFines,
    ],
  ];

  return [
    new Paragraph({
      text: 'Disclosure 2-27 Compliance with laws and regulations',
      heading: HeadingLevel.HEADING_2,
    }),

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
        ...firstTableRows.map(
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
        ...secondTableRows.map(
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
  ];
}
