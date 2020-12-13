export const PIVOTTABLE_TEST01 = {
  mdx: 'SELECT  FROM [CITIES]',
  resp: {
    Info: {
      Error: '',
      TimeStamp: '2020-12-12 19:41:13',
      ResultsComplete: 1,
      PendingResults: 0,
      MDXText: 'SELECT FROM [CITIES]',
      QueryKey: 'ptbr707536787',
      CubeKey: 'CITIES',
      QueryID: 'CITIES||ptbr707536787',
      Cube: 'CITIES',
      Pivot: '',
      QueryType: 'SELECT',
      ListingSource: '',
      ColCount: 1,
      RowCount: 1
    },
    AxesInfo: [
      {
        '%ID': 'SlicerInfo',
        Text: ''
      },
      {
        '%ID': 'AxisInfo_1',
        Text: '[%SEARCH]'
      },
      {
        '%ID': 'AxisInfo_2',
        Text: '[%SEARCH]'
      }
    ],
    Result: {
      Axes: [

      ],
      CellData: [
        {
          '%ID': 'Cell_1',
          ValueLogical: 9,
          Format: '',
          ValueFormatted: '9'
        }
      ]
    }
  },
  expectations: {
    columnRows: 1,
    columnRowsCells: ['', '%COUNT'],
    columnRowsCount: 2,
    rows: 1,
    cells: ['', '9'],
    cellsCount: 2,
    tableData: {
      tableColumns: [
        [
          {
            name: 'r0c0',
            caption: '',
            type: 'rowCaptionColumn'
          },
          {
            name: 'r0c1',
            caption: '%COUNT',
            type: 'colCaptionColumn'
          }
        ]
      ],
      tableRows: [
        {
          r0c0: {
            '%ID': 'r0c0',
            ValueLogical: '',
            ValueFormatted: ''
          },
          r0c1: {
            '%ID': 'Cell_1',
            ValueLogical: 9,
            Format: '',
            ValueFormatted: '9'
          }
        }
      ]
    }
  }
}