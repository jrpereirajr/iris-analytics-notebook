export const PIVOTTABLE_TEST09 = {
  mdx: 'SELECT NON EMPTY {HEAD(NONEMPTYCROSSJOIN([HomeD].[H1].[ZIP].Members, [Measures].[Population]), 2000, SAMPLE), HEAD(NONEMPTYCROSSJOIN([HomeD].[H1].[ZIP].Members, [Measures].[Avg Population]), 2000, SAMPLE)} ON 0,NON EMPTY HEAD(NONEMPTYCROSSJOIN([HomeD].[H1].[City].Members, [HomeD].[H1].[ZIP].Members), 2000, SAMPLE) ON 1 FROM [Cities]',
  resp: {
    Info: {
      Error: '',
      TimeStamp: '2020-12-13 17:09:18',
      ResultsComplete: 1,
      PendingResults: 0,
      MDXText: 'SELECT NON EMPTY {HEAD(NONEMPTYCROSSJOIN([HOMED].[H1].[ZIP].MEMBERS,[MEASURES].[POPULATION]),2000,SAMPLE),HEAD(NONEMPTYCROSSJOIN([HOMED].[H1].[ZIP].MEMBERS,[MEASURES].[AVG POPULATION]),2000,SAMPLE)} ON 0,NON EMPTY HEAD(NONEMPTYCROSSJOIN([HOMED].[H1].[CITY].MEMBERS,[HOMED].[H1].[ZIP].MEMBERS),2000,SAMPLE) ON 1 FROM [CITIES]',
      QueryKey: 'ptbr19888224',
      CubeKey: 'CITIES',
      QueryID: 'CITIES||ptbr19888224',
      Cube: 'Cities',
      Pivot: '',
      QueryType: 'SELECT',
      ListingSource: '',
      ColCount: 10,
      RowCount: 9
    },
    AxesInfo: [
      {
        '%ID': 'SlicerInfo',
        Text: ''
      },
      {
        '%ID': 'AxisInfo_1',
        Text: 'NON EMPTY {HEAD(NONEMPTYCROSSJOIN([HOMED].[H1].[ZIP].MEMBERS,[MEASURES].[POPULATION]),2000,SAMPLE),HEAD(NONEMPTYCROSSJOIN([HOMED].[H1].[ZIP].MEMBERS,[MEASURES].[AVG POPULATION]),2000,SAMPLE)}'
      },
      {
        '%ID': 'AxisInfo_2',
        Text: 'NON EMPTY HEAD(NONEMPTYCROSSJOIN([HOMED].[H1].[CITY].MEMBERS,[HOMED].[H1].[ZIP].MEMBERS),2000,SAMPLE)'
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
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32006'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 13,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 6,
                  text: '32006',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32006',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32007'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 14,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 7,
                  text: '32007',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32007',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '34577'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 15,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 8,
                  text: '34577',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '34577',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '36711'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 16,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 9,
                  text: '36711',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '36711',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '38928'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 17,
                  text: 'Population',
                  dimName: 'Measures',
                  hierName: 'Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 3,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 10,
                  text: '38928',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '38928',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32006'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 28,
                  text: 'Avg Population',
                  dimName: 'Measures',
                  hierName: 'Avg Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 4,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 21,
                  text: '32006',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32006',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32007'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 29,
                  text: 'Avg Population',
                  dimName: 'Measures',
                  hierName: 'Avg Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 4,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 22,
                  text: '32007',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32007',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '34577'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 30,
                  text: 'Avg Population',
                  dimName: 'Measures',
                  hierName: 'Avg Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 4,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 23,
                  text: '34577',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '34577',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '36711'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 31,
                  text: 'Avg Population',
                  dimName: 'Measures',
                  hierName: 'Avg Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 4,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 24,
                  text: '36711',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '36711',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                }
              ]
            },
            {
              '%ID': 'Tuple_10',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '38928'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 32,
                  text: 'Avg Population',
                  dimName: 'Measures',
                  hierName: 'Avg Population',
                  levelName: '',
                  memberKey: '',
                  dimNo: 0,
                  hierNo: 4,
                  levelNo: 0,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 25,
                  text: '38928',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '38928',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
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
            },
            {
              '%ID': 'TupleInfo_10',
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
                  Name: '38928'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Cedar Falls'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 21,
                  text: '38928',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '38928',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 5,
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
                  Name: '36711'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Centerville'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 22,
                  text: '36711',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '36711',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 6,
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
                  Name: '34577'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Cypress'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 23,
                  text: '34577',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '34577',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 7,
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
                  Name: '38928'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Elm Heights'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 24,
                  text: '38928',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '38928',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 8,
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
                  Name: '32006'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Juniper'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 25,
                  text: '32006',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32006',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 9,
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
                  Name: '34577'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Magnolia'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 26,
                  text: '34577',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '34577',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 10,
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
                  Name: '34577'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Pine'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 27,
                  text: '34577',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '34577',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 11,
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
                  Name: '32007'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Redwood'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 28,
                  text: '32007',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32007',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 12,
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
                  Name: '32006'
                },
                {
                  '%ID': 'Member_2',
                  Name: 'Spruce'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 29,
                  text: '32006',
                  dimName: 'HomeD',
                  hierName: 'H1',
                  levelName: 'ZIP',
                  memberKey: '32006',
                  dimNo: 2,
                  hierNo: 1,
                  levelNo: 2,
                  aggregate: '',
                  orSpec: ''
                },
                {
                  '%ID': 'MemberInfo_2',
                  nodeNo: 13,
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
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Cedar Falls],[HomeD].[H1].[ZIP].&[38928].children)'
            },
            {
              '%ID': 'TupleInfo_2',
              Error: '',
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Centerville],[HomeD].[H1].[ZIP].&[36711].children)'
            },
            {
              '%ID': 'TupleInfo_3',
              Error: '',
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Cypress],[HomeD].[H1].[ZIP].&[34577].children)'
            },
            {
              '%ID': 'TupleInfo_4',
              Error: '',
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Elm Heights],[HomeD].[H1].[ZIP].&[38928].children)'
            },
            {
              '%ID': 'TupleInfo_5',
              Error: '',
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Juniper],[HomeD].[H1].[ZIP].&[32006].children)'
            },
            {
              '%ID': 'TupleInfo_6',
              Error: '',
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Magnolia],[HomeD].[H1].[ZIP].&[34577].children)'
            },
            {
              '%ID': 'TupleInfo_7',
              Error: '',
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Pine],[HomeD].[H1].[ZIP].&[34577].children)'
            },
            {
              '%ID': 'TupleInfo_8',
              Error: '',
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Redwood],[HomeD].[H1].[ZIP].&[32007].children)'
            },
            {
              '%ID': 'TupleInfo_9',
              Error: '',
              childSpec: 'CROSSJOIN([HomeD].[H1].[City].&[Spruce],[HomeD].[H1].[ZIP].&[32006].children)'
            }
          ]
        }
      ],
      CellData: [
        {
          '%ID': 'Cell_1',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_2',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_3',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_4',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_5',
          ValueLogical: 90000,
          Format: '',
          ValueFormatted: '90,000'
        },
        {
          '%ID': 'Cell_6',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_7',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_8',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_9',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_10',
          ValueLogical: 90000,
          Format: '#,###.##',
          ValueFormatted: '90,000.00'
        },
        {
          '%ID': 'Cell_11',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_12',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_13',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_14',
          ValueLogical: 49000,
          Format: '',
          ValueFormatted: '49,000'
        },
        {
          '%ID': 'Cell_15',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_16',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_17',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_18',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_19',
          ValueLogical: 49000,
          Format: '#,###.##',
          ValueFormatted: '49,000.00'
        },
        {
          '%ID': 'Cell_20',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_21',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_22',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_23',
          ValueLogical: 3000,
          Format: '',
          ValueFormatted: '3,000'
        },
        {
          '%ID': 'Cell_24',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_25',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_26',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_27',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_28',
          ValueLogical: 3000,
          Format: '#,###.##',
          ValueFormatted: '3,000.00'
        },
        {
          '%ID': 'Cell_29',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_30',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_31',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_32',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_33',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_34',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_35',
          ValueLogical: 33194,
          Format: '',
          ValueFormatted: '33,194'
        },
        {
          '%ID': 'Cell_36',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_37',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_38',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_39',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_40',
          ValueLogical: 33194,
          Format: '#,###.##',
          ValueFormatted: '33,194.00'
        },
        {
          '%ID': 'Cell_41',
          ValueLogical: 10333,
          Format: '',
          ValueFormatted: '10,333'
        },
        {
          '%ID': 'Cell_42',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_43',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_44',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_45',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_46',
          ValueLogical: 10333,
          Format: '#,###.##',
          ValueFormatted: '10,333.00'
        },
        {
          '%ID': 'Cell_47',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_48',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_49',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_50',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_51',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_52',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_53',
          ValueLogical: 4503,
          Format: '',
          ValueFormatted: '4,503'
        },
        {
          '%ID': 'Cell_54',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_55',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_56',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_57',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_58',
          ValueLogical: 4503,
          Format: '#,###.##',
          ValueFormatted: '4,503.00'
        },
        {
          '%ID': 'Cell_59',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_60',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_61',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_62',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_63',
          ValueLogical: 15060,
          Format: '',
          ValueFormatted: '15,060'
        },
        {
          '%ID': 'Cell_64',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_65',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_66',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_67',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_68',
          ValueLogical: 15060,
          Format: '#,###.##',
          ValueFormatted: '15,060.00'
        },
        {
          '%ID': 'Cell_69',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_70',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_71',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_72',
          ValueLogical: 29192,
          Format: '',
          ValueFormatted: '29,192'
        },
        {
          '%ID': 'Cell_73',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_74',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_75',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_76',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_77',
          ValueLogical: 29192,
          Format: '#,###.##',
          ValueFormatted: '29,192.00'
        },
        {
          '%ID': 'Cell_78',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_79',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_80',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_81',
          ValueLogical: 5900,
          Format: '',
          ValueFormatted: '5,900'
        },
        {
          '%ID': 'Cell_82',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_83',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_84',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_85',
          ValueLogical: '',
          Format: '',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_86',
          ValueLogical: 5900,
          Format: '#,###.##',
          ValueFormatted: '5,900.00'
        },
        {
          '%ID': 'Cell_87',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_88',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_89',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        },
        {
          '%ID': 'Cell_90',
          ValueLogical: '',
          Format: '#,###.##',
          ValueFormatted: ''
        }
      ]
    }
  },
  expectations: {
    columnRows: 2,
    columnRowsCells: [
      'City', 'ZIP', '32006', '32007', '34577', '36711', '38928', '32006', '32007', '34577', '36711', '38928',
      'City', 'ZIP', 'Population', 'Population', 'Population', 'Population', 'Population', 'Avg Population', 'Avg Population', 'Avg Population', 'Avg Population', 'Avg Population'
    ],
    columnRowsCount: 24,
    rows: 9,
    cells: [
      'Cedar Falls', '38928', '', '', '', '', '90,000', '', '', '', '', '90,000.00',
      'Centerville', '36711', '', '', '', '49,000', '', '', '', '', '49,000.00', '',
      'Cypress', '34577', '', '', '3,000', '', '', '', '', '3,000.00', '', '',
      'Elm Heights', '38928', '', '', '', '', '33,194', '', '', '', '', '33,194.00',
      'Juniper', '32006', '10,333', '', '', '', '', '10,333.00', '', '', '', '',
      'Magnolia', '34577', '', '', '4,503', '', '', '', '', '4,503.00', '', '',
      'Pine', '34577', '', '', '15,060', '', '', '', '', '15,060.00', '', '',
      'Redwood', '32007', '', '29,192', '', '', '', '', '29,192.00', '', '', '',
      'Spruce', '32006', '5,900', '', '', '', '', '5,900.00', '', '', '', ''
    ],
    cellsCount: 108,
    tableData: {
      tableColumns:[
         [
            {
               name:'r0c0',
               caption:'City',
               type: 'rowCaptionColumn'
            },
            {
               name:'r0c1',
               caption:'ZIP',
               type: 'rowCaptionColumn'
            },
            {
               name:'r0c2',
               caption:'32006',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c3',
               caption:'32007',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c4',
               caption:'34577',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c5',
               caption:'36711',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c6',
               caption:'38928',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c7',
               caption:'32006',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c8',
               caption:'32007',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c9',
               caption:'34577',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c10',
               caption:'36711',
               type: 'colCaptionColumn'
            },
            {
               name:'r0c11',
               caption:'38928',
               type: 'colCaptionColumn'
            }
         ],
         [
            {
               name:'r1c0',
               caption:'City',
               type: 'rowCaptionColumn'
            },
            {
               name:'r1c1',
               caption:'ZIP',
               type: 'rowCaptionColumn'
            },
            {
               name:'r1c2',
               caption:'Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c3',
               caption:'Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c4',
               caption:'Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c5',
               caption:'Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c6',
               caption:'Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c7',
               caption:'Avg Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c8',
               caption:'Avg Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c9',
               caption:'Avg Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c10',
               caption:'Avg Population',
               type: 'colCaptionColumn'
            },
            {
               name:'r1c11',
               caption:'Avg Population',
               type: 'colCaptionColumn'
            }
         ]
      ],
      tableRows:[
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'38928',
               ValueFormatted:'38928'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Cedar Falls',
               ValueFormatted:'Cedar Falls'
            },
            r1c2:{
               '%ID':'Cell_1',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c3:{
               '%ID':'Cell_2',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c4:{
               '%ID':'Cell_3',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c5:{
               '%ID':'Cell_4',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c6:{
               '%ID':'Cell_5',
               ValueLogical:90000,
               Format:'',
               ValueFormatted:'90,000'
            },
            r1c7:{
               '%ID':'Cell_6',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c8:{
               '%ID':'Cell_7',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c9:{
               '%ID':'Cell_8',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c10:{
               '%ID':'Cell_9',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c11:{
               '%ID':'Cell_10',
               ValueLogical:90000,
               Format:'#,###.##',
               ValueFormatted:'90,000.00'
            }
         },
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'36711',
               ValueFormatted:'36711'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Centerville',
               ValueFormatted:'Centerville'
            },
            r1c2:{
               '%ID':'Cell_11',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c3:{
               '%ID':'Cell_12',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c4:{
               '%ID':'Cell_13',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c5:{
               '%ID':'Cell_14',
               ValueLogical:49000,
               Format:'',
               ValueFormatted:'49,000'
            },
            r1c6:{
               '%ID':'Cell_15',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c7:{
               '%ID':'Cell_16',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c8:{
               '%ID':'Cell_17',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c9:{
               '%ID':'Cell_18',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c10:{
               '%ID':'Cell_19',
               ValueLogical:49000,
               Format:'#,###.##',
               ValueFormatted:'49,000.00'
            },
            r1c11:{
               '%ID':'Cell_20',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            }
         },
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'34577',
               ValueFormatted:'34577'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Cypress',
               ValueFormatted:'Cypress'
            },
            r1c2:{
               '%ID':'Cell_21',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c3:{
               '%ID':'Cell_22',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c4:{
               '%ID':'Cell_23',
               ValueLogical:3000,
               Format:'',
               ValueFormatted:'3,000'
            },
            r1c5:{
               '%ID':'Cell_24',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c6:{
               '%ID':'Cell_25',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c7:{
               '%ID':'Cell_26',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c8:{
               '%ID':'Cell_27',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c9:{
               '%ID':'Cell_28',
               ValueLogical:3000,
               Format:'#,###.##',
               ValueFormatted:'3,000.00'
            },
            r1c10:{
               '%ID':'Cell_29',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c11:{
               '%ID':'Cell_30',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            }
         },
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'38928',
               ValueFormatted:'38928'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Elm Heights',
               ValueFormatted:'Elm Heights'
            },
            r1c2:{
               '%ID':'Cell_31',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c3:{
               '%ID':'Cell_32',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c4:{
               '%ID':'Cell_33',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c5:{
               '%ID':'Cell_34',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c6:{
               '%ID':'Cell_35',
               ValueLogical:33194,
               Format:'',
               ValueFormatted:'33,194'
            },
            r1c7:{
               '%ID':'Cell_36',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c8:{
               '%ID':'Cell_37',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c9:{
               '%ID':'Cell_38',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c10:{
               '%ID':'Cell_39',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c11:{
               '%ID':'Cell_40',
               ValueLogical:33194,
               Format:'#,###.##',
               ValueFormatted:'33,194.00'
            }
         },
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'32006',
               ValueFormatted:'32006'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Juniper',
               ValueFormatted:'Juniper'
            },
            r1c2:{
               '%ID':'Cell_41',
               ValueLogical:10333,
               Format:'',
               ValueFormatted:'10,333'
            },
            r1c3:{
               '%ID':'Cell_42',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c4:{
               '%ID':'Cell_43',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c5:{
               '%ID':'Cell_44',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c6:{
               '%ID':'Cell_45',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c7:{
               '%ID':'Cell_46',
               ValueLogical:10333,
               Format:'#,###.##',
               ValueFormatted:'10,333.00'
            },
            r1c8:{
               '%ID':'Cell_47',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c9:{
               '%ID':'Cell_48',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c10:{
               '%ID':'Cell_49',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c11:{
               '%ID':'Cell_50',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            }
         },
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'34577',
               ValueFormatted:'34577'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Magnolia',
               ValueFormatted:'Magnolia'
            },
            r1c2:{
               '%ID':'Cell_51',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c3:{
               '%ID':'Cell_52',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c4:{
               '%ID':'Cell_53',
               ValueLogical:4503,
               Format:'',
               ValueFormatted:'4,503'
            },
            r1c5:{
               '%ID':'Cell_54',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c6:{
               '%ID':'Cell_55',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c7:{
               '%ID':'Cell_56',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c8:{
               '%ID':'Cell_57',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c9:{
               '%ID':'Cell_58',
               ValueLogical:4503,
               Format:'#,###.##',
               ValueFormatted:'4,503.00'
            },
            r1c10:{
               '%ID':'Cell_59',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c11:{
               '%ID':'Cell_60',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            }
         },
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'34577',
               ValueFormatted:'34577'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Pine',
               ValueFormatted:'Pine'
            },
            r1c2:{
               '%ID':'Cell_61',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c3:{
               '%ID':'Cell_62',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c4:{
               '%ID':'Cell_63',
               ValueLogical:15060,
               Format:'',
               ValueFormatted:'15,060'
            },
            r1c5:{
               '%ID':'Cell_64',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c6:{
               '%ID':'Cell_65',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c7:{
               '%ID':'Cell_66',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c8:{
               '%ID':'Cell_67',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c9:{
               '%ID':'Cell_68',
               ValueLogical:15060,
               Format:'#,###.##',
               ValueFormatted:'15,060.00'
            },
            r1c10:{
               '%ID':'Cell_69',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c11:{
               '%ID':'Cell_70',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            }
         },
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'32007',
               ValueFormatted:'32007'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Redwood',
               ValueFormatted:'Redwood'
            },
            r1c2:{
               '%ID':'Cell_71',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c3:{
               '%ID':'Cell_72',
               ValueLogical:29192,
               Format:'',
               ValueFormatted:'29,192'
            },
            r1c4:{
               '%ID':'Cell_73',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c5:{
               '%ID':'Cell_74',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c6:{
               '%ID':'Cell_75',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c7:{
               '%ID':'Cell_76',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c8:{
               '%ID':'Cell_77',
               ValueLogical:29192,
               Format:'#,###.##',
               ValueFormatted:'29,192.00'
            },
            r1c9:{
               '%ID':'Cell_78',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c10:{
               '%ID':'Cell_79',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c11:{
               '%ID':'Cell_80',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            }
         },
         {
            r1c1:{
               '%ID':'Member_1',
               ValueLogical:'32006',
               ValueFormatted:'32006'
            },
            r1c0:{
               '%ID':'Member_2',
               ValueLogical:'Spruce',
               ValueFormatted:'Spruce'
            },
            r1c2:{
               '%ID':'Cell_81',
               ValueLogical:5900,
               Format:'',
               ValueFormatted:'5,900'
            },
            r1c3:{
               '%ID':'Cell_82',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c4:{
               '%ID':'Cell_83',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c5:{
               '%ID':'Cell_84',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c6:{
               '%ID':'Cell_85',
               ValueLogical:'',
               Format:'',
               ValueFormatted:''
            },
            r1c7:{
               '%ID':'Cell_86',
               ValueLogical:5900,
               Format:'#,###.##',
               ValueFormatted:'5,900.00'
            },
            r1c8:{
               '%ID':'Cell_87',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c9:{
               '%ID':'Cell_88',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c10:{
               '%ID':'Cell_89',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            },
            r1c11:{
               '%ID':'Cell_90',
               ValueLogical:'',
               Format:'#,###.##',
               ValueFormatted:''
            }
         }
      ]
   }
  }
}