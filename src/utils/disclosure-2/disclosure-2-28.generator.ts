import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_28(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-28 Membership associations',
      heading: HeadingLevel.HEADING_2,
    }),
    ...emptyTable(data ?? {}),
  ];
}
