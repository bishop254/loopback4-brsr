import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureTax(data: any) {
  const rows = [
    ['Names of the resident entities', data?.residentEntities],
    ['Primary activities of the organization', data?.primaryActivities],
    [
      'Number of employees, and the basis of calculation of this number;',
      data?.employeeCount,
    ],
    ['Revenues from third-party sales;', data?.thirdPartyRevenue],
    [
      'Revenues from intra-group transactions with other tax jurisdictions;',
      data?.intraGroupRevenue,
    ],
    ['Profit/loss before tax', data?.profitOrLoss],
    [
      'Tangible assets other than cash and cash equivalents;',
      data?.tangibleAssets,
    ],
    ['Corporate income tax paid on a cash basis;', data?.taxPaidCash],
    ['Corporate income tax accrued on profit/loss;', data?.taxAccrued],
    [
      'Reasons for the difference between corporate income tax accrued on profit/loss and the tax due if the statutory tax rate is applied to profit/loss before tax.',
      data?.taxDifferenceReason,
    ],
  ];

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Tax',
          ['GRI 207-1', 'GRI 207-2', 'GRI 207-3', 'GRI 207-4'],
          true,
        ),
      ],
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({text: 'Particulars', bold: true})],
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({text: 'Tax Jurisdiction', bold: true}),
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
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({children: [new Paragraph(value ?? '')]}),
              ],
            }),
        ),
      ],
    }),

    ...emptyTable({}),
  ];
}
