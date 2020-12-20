export interface NotebookInterface {
  Id?: string;
  Name?: string;
}

export enum NotebookCellTypeEnum {
  MARKDOWN = 'MARKDOWN',
  IRIS_ANALYTICS_URL = 'IRIS_ANALYTICS_URL',
  PIVOT_TABLE = 'PIVOT_TABLE'
}

export const NotebookCellTypeEnumLabels = {
  [NotebookCellTypeEnum.MARKDOWN]: 'Markdown',
  [NotebookCellTypeEnum.IRIS_ANALYTICS_URL]: 'IRIS dashoard',
  [NotebookCellTypeEnum.PIVOT_TABLE]: 'Pivot table'
}