import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_4(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-4 Restatements of information',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
