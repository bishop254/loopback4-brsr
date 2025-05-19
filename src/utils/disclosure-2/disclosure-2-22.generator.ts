import {HeadingLevel, Paragraph, TextRun} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_22(data: any) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: '4. Strategy, policies and practices',
          bold: true,
          size: 30,
        }),
      ],
    }),
    new Paragraph({
      text: 'Disclosure 2-22 Statement on sustainable development strategy',
      heading: HeadingLevel.HEADING_2,
    }),
    ...emptyTable(data ?? {}),
  ];
}
