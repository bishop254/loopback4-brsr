import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureLocalCommunities(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Local Communities',
          [
            'S3.SBM-3_01 to S3.SBM-3_08',
            'S3-3_19',
            'S3-4_08',
            'S3-4_09',
            'S3-4_14',
            'S3-4_16',
            'S3-5_01',
            'S3-5_04',
            'S3-5_05',
            'S3-2_09',
            'S3-3_16',
            'S3-3_17',
            'S3-4_01 to S3-4_19',
            'S3-5_02',
            'S3-5_03',
            'S3-5_06',
            'GRI 413-1',
            'S3-3_11',
            'S3-2_06',
            'S3-4_17',
            'GRI 413-2',
            'ESRS 2',
            'SBM-3_04',
            'SBM-3_07',
            'SBM-3_04',
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
                  'Percentage of operations with implemented local community engagement, impact assessments, and/or development programs',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.localCommunityEngagementPercent ?? ''),
              ],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
