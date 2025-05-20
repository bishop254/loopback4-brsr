import {Paragraph, Table, TableCell, TableRow, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureWaterConsumption(data: any) {
  const withdrawalSources = [
    'Surface water',
    'Groundwater',
    'Seawater',
    'Produced water',
    'Third-party water',
  ];

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [generateTitleRow('Water consumption', ['E3-4_01 to E3-4_10'])],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Water consumption [GRI 303-5]')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ALL AREAS')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('AREAS WITH WATER STRESS')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Total water consumption')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph(
                  'Change in water storage, if water storage has been identified as having a significant water-related impact',
                ),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('-')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph('FACILITIES IN AREAS WITH WATER STRESS'),
              ],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('FACILITY A')],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('FACILITY B')],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('[FACILITY X]')],
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Water withdrawal (clause 2.2.1)')],
              columnSpan: 4,
            }),
          ],
        }),

        ...withdrawalSources.map(
          label =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 25, type: WidthType.PERCENTAGE},
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  width: {size: 25, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
                new TableCell({
                  width: {size: 25, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
                new TableCell({
                  width: {size: 25, type: WidthType.PERCENTAGE},
                  children: [new Paragraph('ML')],
                }),
              ],
            }),
        ),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 100, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Water consumption (clause 2.5.1)')],
              columnSpan: 4,
            }),
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Total water consumption')],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
            new TableCell({
              width: {size: 25, type: WidthType.PERCENTAGE},
              children: [new Paragraph('ML')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
