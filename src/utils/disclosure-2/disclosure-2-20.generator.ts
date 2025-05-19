import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_20(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-20 Process to determine remuneration',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
