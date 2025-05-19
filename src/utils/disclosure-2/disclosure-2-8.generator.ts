import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_8(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-8 Workers who are not employees',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
