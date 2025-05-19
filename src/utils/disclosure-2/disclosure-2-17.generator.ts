import {HeadingLevel, Paragraph} from 'docx';
import {emptyTable} from '../empty-table';

export function generateDisclosure2_17(data: any) {
  return [
    new Paragraph({
      text: 'Disclosure 2-17 Collective knowledge of the highest governance body',
      heading: HeadingLevel.HEADING_2,
    }),

    ...emptyTable(data ?? {}),
  ];
}
