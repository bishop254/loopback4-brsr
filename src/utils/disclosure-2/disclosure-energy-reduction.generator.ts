import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureEnergyReduction(data: any) {
  const rows = ['Fuel', 'Electricity', 'Heating', 'Colling', 'steam'];

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Reduction of energy consumption', ['GRI 302-4']),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Amount of reductions in energy consumption (joules or multiples)',
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
                  children: [new TextRun({text: 'Baseline year', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'FY 2023', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...rows.map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 40, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('')],
                }),
                new TableCell({
                  width: {size: 30, type: WidthType.PERCENTAGE},
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
