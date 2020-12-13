export const PIVOTTABLE_TEST04 = {
  mdx: 'SELECT [Measures].[City Count] ON 0,NON EMPTY [HomeD].[H1].[City].Members ON 1 FROM [CITIES]',
  resp: {
    Info: {
      Error: '',
      TimeStamp: '2020-12-13 13:20:44',
      ResultsComplete: 1,
      PendingResults: 0,
      MDXText: 'SELECT [MEASURES].[CITY COUNT] ON 0,NON EMPTY [HOMED].[H1].[CITY].MEMBERS ON 1 FROM [CITIES]',
      QueryKey: 'ptbr3082362161',
      CubeKey: 'CITIES',
      QueryID: 'CITIES||ptbr3082362161',
      Cube: 'CITIES',
      Pivot: '',
      QueryType: 'SELECT',
      ListingSource: '',
      ColCount: 1,
      RowCount: 9
    },
    AxesInfo: [
      {
        '%ID': 'SlicerInfo',
        Text: ''
      },
      {
        '%ID': 'AxisInfo_1',
        Text: '[MEASURES].[CITY COUNT]'
      },
      {
        '%ID': 'AxisInfo_2',
        Text: 'NON EMPTY [HOMED].[H1].[CITY].MEMBERS'
      }
    ],
    Result: {
      Axes: [
        {
          '%ID': 'Axis_1',
          Tuples: [
            {
              '%ID': 'Tuple_1',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'City Count'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 2,
                  text: 'City Count',
                  dimName: 'Measures',
                  hierName: 'City Count',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 2,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            }
          ],
          TupleInfo: [
            {
              '%ID': 'TupleInfo_1',
              Error: '',
              childSpec: ''
            }
          ]
        },
        {
          '%ID': 'Axis_2',
          Tuples: [
            {
              '%ID': 'Tuple_1',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Cedar Falls'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 3,
                  text: 'Cedar Falls',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Cedar Falls',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_2',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Centerville'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 4,
                  text: 'Centerville',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Centerville',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_3',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Cypress'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 5,
                  text: 'Cypress',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Cypress',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_4',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Elm Heights'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 6,
                  text: 'Elm Heights',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Elm Heights',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_5',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Juniper'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 7,
                  text: 'Juniper',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Juniper',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_6',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Magnolia'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 8,
                  text: 'Magnolia',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Magnolia',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_7',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Pine'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 9,
                  text: 'Pine',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Pine',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_8',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Redwood'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 10,
                  text: 'Redwood',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Redwood',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_9',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Spruce'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 11,
                  text: 'Spruce',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'City',
                  memberKey: 'Spruce',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 3,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            }
          ],
          TupleInfo: [
            {
              '%ID': 'TupleInfo_1',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_2',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_3',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_4',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_5',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_6',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_7',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_8',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_9',
              Error: '',
              childSpec: ''
            }
          ]
        }
      ],
      CellData: [
        {
          '%ID': 'Cell_1',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        },
        {
          '%ID': 'Cell_2',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        },
        {
          '%ID': 'Cell_3',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        },
        {
          '%ID': 'Cell_4',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        },
        {
          '%ID': 'Cell_5',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        },
        {
          '%ID': 'Cell_6',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        },
        {
          '%ID': 'Cell_7',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        },
        {
          '%ID': 'Cell_8',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        },
        {
          '%ID': 'Cell_9',
          ValueLogical: 1,
          Format: '#,###.##',
          ValueFormatted: '1.00'
        }
      ]
    }
  },
  expectations: {
    columnRows: 1,
    columnRowsCells: ['City', 'City Count'],
    columnRowsCount: 2,
    rows: 9,
    cells: ['Cedar Falls', '1.00', 'Centerville', '1.00', 'Cypress', '1.00', 'Elm Heights', '1.00', 'Juniper', '1.00', 'Magnolia', '1.00', 'Pine', '1.00', 'Redwood', '1.00', 'Spruce', '1.00'],
    cellsCount: 18,
    tableData: {
      tableColumns: [
        [
          {
            name: 'r0c0',
            caption: 'City',
            type: 'rowCaptionColumn'
          },
          {
            name: 'r0c1',
            caption: 'City Count',
            type: 'colCaptionColumn'
          }
        ]
      ],
      tableRows: [
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Cedar Falls',
            ValueFormatted: 'Cedar Falls'
          },
          r0c1: {
            '%ID': 'Cell_1',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        },
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Centerville',
            ValueFormatted: 'Centerville'
          },
          r0c1: {
            '%ID': 'Cell_2',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        },
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Cypress',
            ValueFormatted: 'Cypress'
          },
          r0c1: {
            '%ID': 'Cell_3',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        },
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Elm Heights',
            ValueFormatted: 'Elm Heights'
          },
          r0c1: {
            '%ID': 'Cell_4',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        },
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Juniper',
            ValueFormatted: 'Juniper'
          },
          r0c1: {
            '%ID': 'Cell_5',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        },
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Magnolia',
            ValueFormatted: 'Magnolia'
          },
          r0c1: {
            '%ID': 'Cell_6',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        },
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Pine',
            ValueFormatted: 'Pine'
          },
          r0c1: {
            '%ID': 'Cell_7',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        },
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Redwood',
            ValueFormatted: 'Redwood'
          },
          r0c1: {
            '%ID': 'Cell_8',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        },
        {
          r0c0: {
            '%ID': 'Member_1',
            ValueLogical: 'Spruce',
            ValueFormatted: 'Spruce'
          },
          r0c1: {
            '%ID': 'Cell_9',
            ValueLogical: 1,
            Format: '#,###.##',
            ValueFormatted: '1.00'
          }
        }
      ]
    }
  }
}