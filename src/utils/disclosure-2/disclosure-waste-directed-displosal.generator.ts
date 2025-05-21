import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWasteDirected(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Waste directed to disposal', [
          'GRI 306-5',
          'E5-5_09 to E5-5_15',
          'E5-5_17',
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
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Total weight of waste diverted to disposal',
                      bold: true,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 33.33, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Data', bold: true})],
                }),
              ],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Hazardous waste')]}),
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        ...[
          'Incineration (with energy recovery)',
          'Incineration (without energy recovery)',
          'Landfilling',
          'Other disposal operations',
          'Onsite',
          'Offsite',
        ].map(
          label =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({children: [new Paragraph('Metric tons')]}),
                new TableCell({children: [new Paragraph('')]}),
              ],
            }),
        ),

        new TableRow({
          children: [
            new TableCell({children: [new Paragraph('Non-hazardous waste')]}),
            new TableCell({children: [new Paragraph('')]}),
            new TableCell({children: [new Paragraph('')]}),
          ],
        }),
        ...[
          'Incineration (with energy recovery)',
          'Incineration (without energy recovery)',
          'Landfilling',
          'Other disposal operations',
          'Onsite',
          'Offsite',
        ].map(
          label =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({children: [new Paragraph('Metric tons')]}),
                new TableCell({children: [new Paragraph('')]}),
              ],
            }),
        ),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
