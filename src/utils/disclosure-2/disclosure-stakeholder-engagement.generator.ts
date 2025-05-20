import {
  BorderStyle,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import {generateTitleRow} from '../title&ref';

const bottomBorderOnly = {
  top: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  bottom: {style: BorderStyle.SINGLE, size: 1, color: '#2f5496'},
  left: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  right: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
};

const noBorders = {
  top: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  bottom: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  left: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  right: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
};

export function generateDisclosureStakeholderEngagement(data: any) {
  const rows = [
    new TableRow({
      children: [
        new TableCell({
          width: {size: 25, type: WidthType.PERCENTAGE},
          children: [new Paragraph('')],
          borders: bottomBorderOnly,
        }),
        new TableCell({
          width: {size: 25, type: WidthType.PERCENTAGE},
          children: [new Paragraph('')],
          borders: bottomBorderOnly,
        }),
        new TableCell({
          width: {size: 25, type: WidthType.PERCENTAGE},
          children: [new Paragraph('')],
          borders: bottomBorderOnly,
        }),
        new TableCell({
          width: {size: 25, type: WidthType.PERCENTAGE},
          children: [new Paragraph('')],
          borders: bottomBorderOnly,
        }),
      ],
    }),
  ];

  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow(
          'Stakeholder engagement',
          [
            'GRI 2-29',
            'ESRS 2 SBM-2_01',
            'SBM-2_02',
            'SBM-2_03',
            'SBM-2_04',
            'SBM-2_05',
            'SBM-2_06',
            'S1-1_05',
            'S1-2_02',
            'S1-2_03',
            'S1-2_06',
            'S1-2_07',
            'S1-2_10',
            'S1-2_11',
            'S1-2_12',
            'S1-2_14',
            'S2-1_03',
            'S2-2_02',
            'S2-2_03',
            'S2-2_06',
            'S2-2_07',
            'S2-3_09',
            'S3-1_04',
            'S3-2_02',
            'S3-2_03',
            'S3-2_05',
            'S3-2_06',
          ],
          true,
        ),
      ],
    }),

    new Paragraph({
      text: '',
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: ['Stakeholder', 'Process', 'Objective', 'Frequency'].map(
            header =>
              new TableCell({
                width: {size: 25, type: WidthType.PERCENTAGE},
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: header,
                        bold: true,
                        italics: true,
                        color: '#2f5496',
                      }),
                    ],
                  }),
                ],
                borders: noBorders,
              }),
          ),
        }),
        ...rows,
      ],
    }),

    new Paragraph({
      text: '',
    }),
  ];
}
