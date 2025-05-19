import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_13(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-13 Delegation of responsibility for managing impacts',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
