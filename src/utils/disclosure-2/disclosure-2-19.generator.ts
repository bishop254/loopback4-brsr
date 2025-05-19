import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_19(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-19 Remuneration policies',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
