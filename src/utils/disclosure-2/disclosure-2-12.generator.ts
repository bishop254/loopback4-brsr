import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_12(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-12 Role of the highest governance body in overseeing the management of impacts',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
