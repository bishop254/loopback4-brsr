import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_24(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-24 Embedding policy commitments',
      heading: HeadingLevel.HEADING_2,
    }),
    ...emptyTable(data ?? {}),
  ];
}
