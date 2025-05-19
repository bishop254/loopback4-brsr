import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_11(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-11 Chair of the highest governance body',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
