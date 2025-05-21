import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureOHSSafety(data: any) {
  const headers = ['Particular', 'Number', 'Percentage'];

  const rows = [
    'Number of employees covered under OHS system',
    'Number of workers covered under OHS system',
    'Number of employees who are covered by such a system that has been internally audited',
    'Number of workers who are covered by such a system that has been internally audited',
    'Number of employees who are covered by such a system that has been audited or certified by an external party',
    'Number of workers who are covered by such a system that has been audited or certified by an external party',
    'Number of internal review/inspections carried out for compliance with occupational health and safety',
    'Number of external review/inspections (third-party audits) carried out for compliance with occupational health and safety',
  ];

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Occupational Health and Safety', [
          'GRI 403-1',
          'GRI 403-8',
          'S1-14_01',
          'S1-14_10',
          'S1-14_11',
          'S2-1_05',
          'S2.SBM-3_04',
        ]),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: headers.map(
            header =>
              new TableCell({
                width: {size: 33.33, type: WidthType.PERCENTAGE},
                children: [
                  new Paragraph({
                    children: [new TextRun({text: header, bold: true})],
                  }),
                ],
              }),
          ),
        }),

        ...rows.map(
          (label, index) =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({
                  children: [new Paragraph('')],
                }),
                new TableCell({
                  children: [new Paragraph(index > 6 ? 'X' : '')],
                }),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
