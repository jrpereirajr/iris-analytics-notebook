export interface NotebookInterface {
  Id?: string;
  Name?: string;
}

export enum NotebookCellTypeEnum {
  MARKDOWN,
  IRIS_ANALYTICS_URL,
  PIVOT_TABLE
}