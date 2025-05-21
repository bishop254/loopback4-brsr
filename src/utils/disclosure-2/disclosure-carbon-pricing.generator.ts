import {Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureCarbonPricing(data: any) {
  return [
    new Table({
      width: {size: 100, type: WidthType.PERCENTAGE},
      rows: [generateTitleRow('Carbon pricing', ['E1-8_01 to E1-8_13'])],
    }),

    ...emptyTable({}),
  ];
}
