import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_23(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-23 Policy commitments',
      heading: HeadingLevel.HEADING_2,
    }),
    ...emptyTable(data ?? {}),
  ];
}
