import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureAntiCompetitiveBehavior(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow('Anti-competitive Behavior', ['GRI 206-1'], true),
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
                  children: [new TextRun({text: 'Particular', bold: true})],
                }),
              ],
            }),
            new TableCell({children: []}),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph(
                  'Number of legal actions pending or completed during the reporting period regarding anti-competitive behavior and violations of anti-trust and monopoly legislation in which the organization has been identified as a participant.',
                ),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph(data?.legalActionsAntiCompetition ?? ''),
              ],
            }),
          ],
        }),
      ],
    }),

    ...emptyTable({}),
  ];
}
