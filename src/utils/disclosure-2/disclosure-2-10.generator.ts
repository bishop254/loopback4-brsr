import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_10(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-10 Nomination and selection of the highest governance body',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
