import {BorderStyle, HeadingLevel, Paragraph, Table, WidthType} from 'docx';
import {emptyTable} from '../empty-table';
import {generateTitleRow} from '../title&ref';

export function generateDisclosureMaterialityAssessment(data: any) {
  const noBorders = {
    top: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
    bottom: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
    left: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
    right: {style: BorderStyle.NONE, size: 0, color: 'FFFFFF'},
  };

  return [
    new Paragraph({
      text: 'Materiality Assessment',
      heading: HeadingLevel.HEADING_2,
    }),

    new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        generateTitleRow('Process to determine material topics', [
          'GRI 3-1',
          'ESRS 2',
          'BP-1_04',
          'IRO-1_14',
        ]),
      ],
    }),

    ...emptyTable({}),
  ];
}
