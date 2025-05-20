import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureRisksOpportunitiesClimateChange(data: any) {
  const rows = [
    ['tax relief and tax credits', data?.taxRelief],
    ['subsidies', data?.subsidies],
    [
      'investment grants, research and development grants, and other relevant types of grant;',
      data?.grants,
    ],
    ['awards', data?.awards],
    ['royalty holidays', data?.royaltyHolidays],
    ['financial assistance from Export Credit Agencies (ECAs);', data?.ecas],
    ['financial incentives;', data?.incentives],
    [
      'other financial benefits received or receivable from any government for any operation',
      data?.otherBenefits,
    ],
  ];

  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow(
          'Risks and opportunities due to climate change',
          [
            'GRI 201-2',
            'ESRS 2 SBM-3_01',
            'SBM-3_02',
            'SBM-3_08',
            'SBM-3_09',
            'E1.SBM-3_01',
            'E1.MDR-A_01-12',
            'E1-9_01 to E1-9_44',
            'GRI 201-3',
            'GRI 201-4',
          ],
          true,
        ),
      ],
    }),

    new Paragraph({text: ''}),

    new Paragraph({
      children: [
        new TextRun({
          text: 'The total monetary value of financial assistance received by the organization from any government during the reporting period',
          bold: false,
        }),
      ],
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
              width: {size: 70, type: WidthType.PERCENTAGE},
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
                  children: [new TextRun({text: 'Value', bold: true})],
                }),
              ],
            }),
          ],
        }),
        ...rows.map(
          ([label, value]) =>
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph(label)],
                }),
                new TableCell({
                  children: [new Paragraph(value ?? '')],
                }),
              ],
            }),
        ),
      ],
    }),

    ...emptyTable({}),
  ];
}
