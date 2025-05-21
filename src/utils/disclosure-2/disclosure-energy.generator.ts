import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureEnergy(data: any) {
  const energyFields = [
    'electricity consumption',
    'heating consumption',
    'cooling consumption',
    'steam consumption',
    'electricity sold',
    'Heating sold',
    'Cooling sold',
    'Steam sold',
    'Total energy consumption in organization',
  ];

  const units: any = {
    'electricity consumption': 'Watt-hours or multiples',
    'heating consumption': 'Watt-hours or multiples',
    'cooling consumption': 'Watt-hours or multiples',
    'steam consumption': 'Watt-hours or multiples',
    'electricity sold': 'Watt-hours or multiples',
    'Heating sold': 'Watt-hours or multiples',
    'Cooling sold': 'Watt-hours or multiples',
    'Steam sold': 'Watt-hours or multiples',
    'Total energy consumption in organization': 'joules or multiples.',
  };

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Energy',
          [
            'GRI 302-1',
            'E1-5_01',
            'E1-5_02',
            'E1-5_03',
            'E1-5_05',
            'E1-5_06',
            'E1-5_07',
            'E1-5_08',
            'E1-5_10',
            'E1-5_11',
            'E1-5_12',
            'E1-5_13',
            'E1-5_14',
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
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particular', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unit of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 20, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Non-renewable', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 20, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Renewable', bold: true})],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Total fuel consumption')],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Joules')],
            }),
            new TableCell({
              width: {size: 20, type: WidthType.PERCENTAGE},
              children: [new Paragraph(data?.totalFuelNonRenewable ?? '')],
            }),
            new TableCell({
              width: {size: 20, type: WidthType.PERCENTAGE},
              children: [new Paragraph(data?.totalFuelRenewable ?? '')],
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
              width: {size: 40, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Unite of Measurement', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 30, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: '', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...energyFields.map((item: any) => {
          return new TableRow({
            children: [
              new TableCell({
                width: {size: 40, type: WidthType.PERCENTAGE},
                children: [new Paragraph(item)],
              }),
              new TableCell({
                width: {size: 30, type: WidthType.PERCENTAGE},
                children: [new Paragraph(units[item])],
              }),
              new TableCell({
                width: {size: 30, type: WidthType.PERCENTAGE},
                children: [new Paragraph(data?.[item] ?? '')],
              }),
            ],
          });
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
