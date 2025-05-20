import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureGovernanceStructureComposition(data: any) {
  const rows = [
    'executive and non-executive members',
    'Independence',
    'tenure of members on the governance body',
    'number of other significant positions and commitments held by each member, and the nature of the commitments;',
    'gender',
    'under-represented social groups;',
    'competencies relevant to the impacts of the organization;',
    'stakeholder representation.',
  ];

  return [
    new Paragraph({
      text: 'Governance',
      heading: HeadingLevel.HEADING_1,
    }),

    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Governance structure and composition', [
          'GRI 2-9',
          'ESRS 2 GOV-1_01',
          'ESRS 2 GOV-1_02',
          'ESRS 2 GOV-1_03',
          'ESRS 2 GOV-1_04',
          'ESRS 2 GOV-1_05',
          'ESRS 2 GOV-1_06',
          'ESRS 2 GOV-1_07',
          'ESRS 2 GOV-1_08',
          'ESRS 2 GOV-1_16',
          'ESRS 2 GOV-1_17',
          'ESRS 2 G1-5_11',
          'GRI 2-10',
          'GRI 2-11',
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
                  children: [
                    new TextRun({text: 'List of Committees', bold: true}),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [new Paragraph({text: data?.committees ?? ''})],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: ''})],
                }),
              ],
            }),
            new TableCell({
              width: {size: 50, type: WidthType.PERCENTAGE},
              children: [
                new Paragraph({
                  children: [new TextRun({text: ''})],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    new Paragraph({
      text: '',
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
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
        ...rows.map(
          label =>
            new TableRow({
              children: [
                new TableCell({children: [new Paragraph(label)]}),
                new TableCell({
                  children: [
                    new Paragraph({
                      text: data?.[label] ?? '',
                    }),
                  ],
                }),
              ],
            }),
        ),
      ],
    }),
    new Paragraph({
      text: '',
    }),
  ];
}
