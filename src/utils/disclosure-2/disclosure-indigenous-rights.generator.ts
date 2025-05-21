import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureIndigenousRights(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Rights of Indigenous Peoples', [
          'S3-1_03',
          'S3-1_07',
          'S3-1_08',
          'S3-2_04',
          'S3-2_07',
          'S3-2_01',
          'GRI 411-1',
          'S3-4_02',
          'S3-4_06',
          'S3-4_11',
          'S3.MDR-A_01-12',
          'S3-1_05',
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
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Total number of identified incidents of violations involving the rights of indigenous peoples',
                ),
              ],
            }),
            new TableCell({
              children: [new Paragraph(data?.indigenousRightsViolations ?? '')],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
