import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_14(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-14 Role of the highest governance body in sustainability reporting',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
