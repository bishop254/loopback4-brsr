import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_18(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-18 Evaluation of the performance of the highest governance body',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
