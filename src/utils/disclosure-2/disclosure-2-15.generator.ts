import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_15(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-15 Conflicts of interest',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
