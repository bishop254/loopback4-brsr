import {Paragraph, Table, TableCell, TableRow, TextRun, WidthType} from 'docx';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureDiversityInclusion(data: any) {
  const ageHeaders = [
    'under 30 years old',
    '30-50 years old',
    'over 50 years old',
  ];

  const genderAgeHeaders = ['Male', 'Female'].flatMap(gender =>
    ageHeaders.map(age => `${gender}\n${age}`),
  );

  const governanceCategories = [
    'Senior Management',
    'Middle Management',
    'Entry-level Employees',
  ];

  const employeeCategories = [
    'Permanent Employees',
    'Temporary Employees',
    'Workers',
  ];

  const createHeaderRow = () =>
    new TableRow({
      children: [
        new TableCell({
          width: {size: 20, type: WidthType.PERCENTAGE},
          rowSpan: 2,
          children: [
            new Paragraph({
              children: [new TextRun({text: 'Employee Category', bold: true})],
            }),
          ],
        }),
        ...['Male', 'Female'].map(
          gender =>
            new TableCell({
              width: {size: 40, type: WidthType.PERCENTAGE},
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [new TextRun({text: gender, bold: true})],
                }),
              ],
            }),
        ),
      ],
    });

  const createSubHeaderRow = () =>
    new TableRow({
      children: [...Array(6)].map((_, i) => {
        const label = ageHeaders[i % 3];
        return new TableCell({
          width: {size: 13.33, type: WidthType.PERCENTAGE},
          children: [new Paragraph({text: label})],
        });
      }),
    });

  const createDataRow = (label: string) =>
    new TableRow({
      children: [
        new TableCell({
          width: {size: 20, type: WidthType.PERCENTAGE},
          children: [new Paragraph(label)],
        }),
        ...Array(6)
          .fill('')
          .map(
            () =>
              new TableCell({
                width: {size: 13.33, type: WidthType.PERCENTAGE},
                children: [new Paragraph('')],
              }),
          ),
      ],
    });

  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        generateTitleRow(
          'Diversity & Inclusion',
          [
            'S2.SBM-3_01 to S2.SBM-3_09',
            'GRI 405-1',
            'ESRS 2 GOV-1_05',
            'GOV-1_06',
            'S1-6_01 to S1-6_03',
            'S1-9_01 to S1-9_05',
            'S1-12_01',
          ],
          true,
        ),
      ],
    }),

    new Paragraph({text: ''}),

    new Paragraph({
      text: 'Percentage of individuals within the organization’s governance bodies',
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        createHeaderRow(),
        createSubHeaderRow(),
        ...governanceCategories.map(createDataRow),
      ],
    }),

    new Paragraph({text: ''}),

    new Paragraph({
      text: 'Percentage of employees per employee category',
    }),

    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [
        createHeaderRow(),
        createSubHeaderRow(),
        ...employeeCategories.map(createDataRow),
      ],
    }),

    new Paragraph({text: ''}),
  ];
}
