import {
  HeadingLevel,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_7(data: any) {
  const genderRows = [
    'Number of employees (head count / FTE)',
    'Permanent employees (head count / FTE)',
    'Temporary employees (head count / FTE)',
    'Non-guaranteed hours employees (head count / FTE)',
    'Full-time employees (head count / FTE)',
    'Part-time Employees (head count / FTE)',
  ];

  const regionRows = [
    'Number of employees (head count / FTE)',
    'Permanent employees (head count / FTE)',
    'Temporary employees (head count / FTE)',
    'Non-guaranteed hours employees (head count / FTE)',
    'Full-time employees (head count / FTE)',
    'Part-time Employees (head count / FTE)',
  ];

  return [
    new Paragraph({
      text: 'Disclosure 2-7 Employees',
      heading: HeadingLevel.HEADING_2,
    }),
    new Paragraph({
      text: 'The organization shall:',
    }),
    new Paragraph({
      text: '',
    }),
    new Paragraph({
      text: 'Total number of employees gender-wise',
    }),
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: ['Employee Category', 'Male', 'Female', 'Total'].map(
            header =>
              new TableCell({
                children: [
                  new Paragraph({
                    children: [new TextRun({text: header, bold: true})],
                  }),
                ],
              }),
          ),
        }),
        ...genderRows.map(label => {
          const row = data?.genderBreakdown?.[label] ?? {};
          return new TableRow({
            children: [
              new TableCell({children: [new Paragraph(label)]}),
              new TableCell({children: [new Paragraph(row.male ?? '')]}),
              new TableCell({children: [new Paragraph(row.female ?? '')]}),
              new TableCell({children: [new Paragraph(row.total ?? '')]}),
            ],
          });
        }),
      ],
    }),
    new Paragraph({
      text: '',
    }),
    new Paragraph({
      text: 'Total number of employees region-wise',
    }),
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        new TableRow({
          children: ['Employee Category', 'Region 1', 'Region 2', 'Total'].map(
            header =>
              new TableCell({
                children: [
                  new Paragraph({
                    children: [new TextRun({text: header, bold: true})],
                  }),
                ],
              }),
          ),
        }),
        ...regionRows.map(label => {
          const row = data?.regionBreakdown?.[label] ?? {};
          return new TableRow({
            children: [
              new TableCell({children: [new Paragraph(label)]}),
              new TableCell({children: [new Paragraph(row['Region 1'] ?? '')]}),
              new TableCell({children: [new Paragraph(row['Region 2'] ?? '')]}),
              new TableCell({children: [new Paragraph(row.total ?? '')]}),
            ],
          });
        }),
      ],
    }),
    ...emptyTable({}),
  ];
}
