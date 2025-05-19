import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosure2_2(data: any) {
  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow(
          'Entities included in the organization’s sustainability reporting',
          ['GRI 2-2', 'ESRS 1 5.1', 'ESRS 2', 'BP-1'],
        ),
      ],
    }),
    new Paragraph({
      text: 'The organization shall:',
    }),
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
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
        ...[
          [
            'List all the entities included in its sustainability reporting',
            (data?.includedEntities ?? []).join(', '),
          ],
          ['Frameworks considered for reporting', data?.frameworksConsidered],
        ].map(
          ([label, value]) =>
            new TableRow({
              children: [
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph({text: label})],
                }),
                new TableCell({
                  width: {size: 50, type: WidthType.PERCENTAGE},
                  children: [new Paragraph({text: value ?? '-'})],
                }),
              ],
            }),
        ),
      ],
    }),
    ...emptyTable({}),
  ];
}
