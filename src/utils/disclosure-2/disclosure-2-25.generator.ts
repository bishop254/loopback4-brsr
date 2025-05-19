import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_25(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-25 Processes to remediate negative impacts',
      heading: HeadingLevel.HEADING_2,
    }),
    ...emptyTable(data ?? {}),
  ];
}
