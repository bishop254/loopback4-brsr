import {HeadingLevel, Paragraph, Table, TextRun, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureHumanRights(data: any) {
  return [
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [
        new TextRun({
          text: 'Human Rights',
          bold: true,
        }),
      ],
    }),
    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Freedom of Association and Collective Bargaining', [
          'GRI 407-1',
        ]),
      ],
    }),

    ...emptyTable(data ?? {}),
  ];
}
