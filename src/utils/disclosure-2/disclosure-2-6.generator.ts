import {HeadingLevel, Paragraph, TextRun} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_6(data: any) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: '2. Activities and workers',
          bold: true,
          size: 30,
        }),
      ],
    }),
    new Paragraph({
      text: 'Disclosure 2-6 Activities, value chain and other business relationships',
      heading: HeadingLevel.HEADING_2,
    }),
    ...emptyTable(data ?? {}),
  ];
}
