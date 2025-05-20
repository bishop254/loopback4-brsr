import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureEconomicPerformance(data: any) {
  const rows = [
    ['Economic Value Generated', data?.economicValueGenerated],
    ['Net revenue', data?.netRevenue],
    ['Operating Cost', data?.operatingCost],
    ['Employee wages and benefits', data?.employeeWages],
    ['Spent on Employee benefit', data?.employeeBenefits],
    ['Payments to the providers of capital', data?.capitalPayments],
    ['% of net profit contributed to the community', data?.communityPercent],
    ['The amount contributed to the Community', data?.communityAmount],
    [
      'Amount of Payments to the government in the form of Tax',
      data?.taxAmount,
    ],
    ['Economic value distributed', data?.valueDistributed],
    ['Economic value retained', data?.valueRetained],
  ];

  return [
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow(
          'Economic Performance',
          ['GRI 201', 'G1-6_01 to G1-6_05', 'GRI 201-1', 'ESRS 2 SBM-1_06'],
          true,
        ),
      ],
    }),

    new Paragraph({text: ''}),

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
                  children: [
                    new TextRun({
                      text: 'FY20xx–20xx (INR Million)',
                      bold: true,
                    }),
                  ],
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
