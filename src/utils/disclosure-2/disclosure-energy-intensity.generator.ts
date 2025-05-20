import {Paragraph, Table, TableCell, TableRow, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureEnergyIntensity(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [generateTitleRow('Energy intensity', ['GRI 302-3', 'E1-5_18'])],
    }),

    new Paragraph({text: ''}),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 34, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Particular')],
            }),
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Within the Organization')],
            }),
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [new Paragraph('Outside of organization')],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 34, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph('Energy intensity ratio for the organization'),
              ],
            }),
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [new Paragraph('')],
            }),
            new TableCell({
              width: {size: 33, type: WidthType.PERCENTAGE},
              children: [new Paragraph('')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
