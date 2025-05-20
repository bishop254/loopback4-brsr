import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureMaterialTopics(data: any) {
  const rows = (data?.materialTopics ?? []).map((item: any) => {
    return new TableRow({
      children: [
        new TableCell({
          width: {size: 50, type: WidthType.PERCENTAGE},
          children: [new Paragraph(item.topic ?? '')],
        }),
        new TableCell({
          width: {size: 50, type: WidthType.PERCENTAGE},
          children: [new Paragraph(item.priority ?? '')],
        }),
      ],
    });
  });

  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('List of material topics', [
          'GRI 3-2',
          'ESRS 2 BP-2_21',
          'ESRS 2 BP-2_22',
          'ESRS 2 SBM-3_01, SBM-3_04, SBM-3_07, SBM-3_11',
        ]),
      ],
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'List of Material Topics', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Priority', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...rows,
      ],
    }),
    new Paragraph({
      text: '',
    }),
  ];
}
