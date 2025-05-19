import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_26(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-26 Mechanisms for seeking advice and raising concerns',
      heading: HeadingLevel.HEADING_2,
    }),
    ...emptyTable(data ?? {}),
  ];
}
