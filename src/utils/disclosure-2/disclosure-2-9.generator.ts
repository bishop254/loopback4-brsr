import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

export function generateDisclosure2_9(data: any) {
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
      text: 'Disclosure 2-9 Governance structure and composition',
      heading: HeadingLevel.HEADING_2,
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
