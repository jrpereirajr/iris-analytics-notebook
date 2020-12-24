export interface NotebookInterface {
  id?: string;
  name: string;
  cells: CellInterface[];
}

export interface CellInterface {
  id?: string,
  type: NotebookCellTypeEnum,
  content: any
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