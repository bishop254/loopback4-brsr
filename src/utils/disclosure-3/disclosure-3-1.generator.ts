import {HeadingLevel, Paragraph, TextRun} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure3_1(data: any) {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: 'GRI 3',
          bold: true,
          size: 36,
        }),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: '2. Disclosures on material topics',
          bold: true,
          size: 30,
        }),
      ],
    }),
    new Paragraph({
      text: 'Disclosure 3-1 Process to determine material topics',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
