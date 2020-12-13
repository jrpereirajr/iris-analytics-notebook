export const PIVOTTABLE_TEST11 = {
  mdx: 'SELECT NON EMPTY NONEMPTYCROSSJOIN([HomeD].[H1].[City].Members,NONEMPTYCROSSJOIN([HomeD].[H1].[ZIP].Members,{[Measures].[Population],[Measures].[Avg Population]})) ON 0 FROM [CITIES]',
  resp: {
    Info: {
      Error: '',
      TimeStamp: '2020-12-13 17:33:11',
      ResultsComplete: 1,
      PendingResults: 0,
      MDXText: 'SELECT NON EMPTY NONEMPTYCROSSJOIN(NONEMPTYCROSSJOIN([HOMED].[H1].[CITY].MEMBERS,[HOMED].[H1].[ZIP].MEMBERS),{[MEASURES].[POPULATION],[MEASURES].[AVG POPULATION]}) ON 0 FROM [CITIES]',
      QueryKey: 'ptbr1290519341',
      CubeKey: 'CITIES',
      QueryID: 'CITIES||ptbr1290519341',
      Cube: 'CITIES',
      Pivot: '',
      QueryType: 'SELECT',
      ListingSource: '',
      ColCount: 18,
      RowCount: 1
    },
    AxesInfo: [
      {
        '%ID': 'SlicerInfo',
        Text: ''
      },
      {
        '%ID': 'AxisInfo_1',
        Text: 'NON EMPTY NONEMPTYCROSSJOIN(NONEMPTYCROSSJOIN([HOMED].[H1].[CITY].MEMBERS,[HOMED].[H1].[ZIP].MEMBERS),{[MEASURES].[POPULATION],[MEASURES].[AVG POPULATION]})'
      },
      {
        '%ID': 'AxisInfo_2',
        Text: '[%SEARCH]'
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
                  Name: '38928'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Cedar Falls'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 33,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_2',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '38928'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Cedar Falls'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 34,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                  Name: '36711'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Centerville'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 35,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_4',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '36711'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Centerville'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 36,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                  Name: '34577'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Cypress'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 37,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
              '%ID': 'Tuple_6',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '34577'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Cypress'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 38,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
              '%ID': 'Tuple_7',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '38928'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Elm Heights'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 39,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                  Name: '38928'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Elm Heights'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 40,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_9',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32006'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Juniper'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 41,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                  Name: '32006'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Juniper'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 42,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_11',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '34577'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Magnolia'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 43,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_12',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '34577'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Magnolia'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 44,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_13',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '34577'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Pine'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 45,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_14',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '34577'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Pine'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 46,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_15',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32007'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Redwood'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 47,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_16',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32007'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Redwood'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 48,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_17',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32006'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Spruce'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 49,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
                }
              ]
            },
            {
              '%ID': 'Tuple_18',
              Members: [
                {
                  '%ID': 'Member_1',
                  Name: 'Avg Population'
                },
                {
                  '%ID': 'Member_2',
                  Name: '32006'
                },
                {
                  '%ID': 'Member_3',
                  Name: 'Spruce'
                }
              ],
              MemberInfo: [
                {
                  '%ID': 'MemberInfo_1',
                  nodeNo: 50,
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
                },
                {
                  '%ID': 'MemberInfo_3',
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
            },
            {
              '%ID': 'TupleInfo_11',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_12',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_13',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_14',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_15',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_16',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_17',
              Error: '',
              childSpec: ''
            },
            {
              '%ID': 'TupleInfo_18',
              Error: '',
              childSpec: ''
            }
          ]
        }
      ],
      CellData: [
        {
          '%ID': 'Cell_1',
          ValueLogical: 90000,
          Format: '',
          ValueFormatted: '90,000'
        },
        {
          '%ID': 'Cell_2',
          ValueLogical: 90000,
          Format: '#,###.##',
          ValueFormatted: '90,000.00'
        },
        {
          '%ID': 'Cell_3',
          ValueLogical: 49000,
          Format: '',
          ValueFormatted: '49,000'
        },
        {
          '%ID': 'Cell_4',
          ValueLogical: 49000,
          Format: '#,###.##',
          ValueFormatted: '49,000.00'
        },
        {
          '%ID': 'Cell_5',
          ValueLogical: 3000,
          Format: '',
          ValueFormatted: '3,000'
        },
        {
          '%ID': 'Cell_6',
          ValueLogical: 3000,
          Format: '#,###.##',
          ValueFormatted: '3,000.00'
        },
        {
          '%ID': 'Cell_7',
          ValueLogical: 33194,
          Format: '',
          ValueFormatted: '33,194'
        },
        {
          '%ID': 'Cell_8',
          ValueLogical: 33194,
          Format: '#,###.##',
          ValueFormatted: '33,194.00'
        },
        {
          '%ID': 'Cell_9',
          ValueLogical: 10333,
          Format: '',
          ValueFormatted: '10,333'
        },
        {
          '%ID': 'Cell_10',
          ValueLogical: 10333,
          Format: '#,###.##',
          ValueFormatted: '10,333.00'
        },
        {
          '%ID': 'Cell_11',
          ValueLogical: 4503,
          Format: '',
          ValueFormatted: '4,503'
        },
        {
          '%ID': 'Cell_12',
          ValueLogical: 4503,
          Format: '#,###.##',
          ValueFormatted: '4,503.00'
        },
        {
          '%ID': 'Cell_13',
          ValueLogical: 15060,
          Format: '',
          ValueFormatted: '15,060'
        },
        {
          '%ID': 'Cell_14',
          ValueLogical: 15060,
          Format: '#,###.##',
          ValueFormatted: '15,060.00'
        },
        {
          '%ID': 'Cell_15',
          ValueLogical: 29192,
          Format: '',
          ValueFormatted: '29,192'
        },
        {
          '%ID': 'Cell_16',
          ValueLogical: 29192,
          Format: '#,###.##',
          ValueFormatted: '29,192.00'
        },
        {
          '%ID': 'Cell_17',
          ValueLogical: 5900,
          Format: '',
          ValueFormatted: '5,900'
        },
        {
          '%ID': 'Cell_18',
          ValueLogical: 5900,
          Format: '#,###.##',
          ValueFormatted: '5,900.00'
        }
      ]
    }
  },
  expectations: {
    columnRows: 3,
    columnRowsCells: [
      '','Cedar Falls','Cedar Falls','Centerville','Centerville','Cypress','Cypress','Elm Heights','Elm Heights','Juniper','Juniper','Magnolia','Magnolia','Pine','Pine','Redwood','Redwood','Spruce','Spruce',
      '','38928','38928','36711','36711','34577','34577','38928','38928','32006','32006','34577','34577','34577','34577','32007','32007','32006','32006',
      '','Population','Avg Population','Population','Avg Population','Population','Avg Population','Population','Avg Population','Population','Avg Population','Population','Avg Population','Population','Avg Population','Population','Avg Population','Population','Avg Population'],
    columnRowsCount: 57,
    rows: 1,
    cells: [
      '','90,000','90,000.00','49,000','49,000.00','3,000','3,000.00','33,194','33,194.00','10,333','10,333.00','4,503','4,503.00','15,060','15,060.00','29,192','29,192.00','5,900','5,900.00'
    ],
    cellsCount: 19,
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
            caption: 'Cedar Falls',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c2',
            caption: 'Cedar Falls',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c3',
            caption: 'Centerville',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c4',
            caption: 'Centerville',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c5',
            caption: 'Cypress',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c6',
            caption: 'Cypress',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c7',
            caption: 'Elm Heights',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c8',
            caption: 'Elm Heights',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c9',
            caption: 'Juniper',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c10',
            caption: 'Juniper',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c11',
            caption: 'Magnolia',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c12',
            caption: 'Magnolia',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c13',
            caption: 'Pine',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c14',
            caption: 'Pine',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c15',
            caption: 'Redwood',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c16',
            caption: 'Redwood',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c17',
            caption: 'Spruce',
            type: 'colCaptionColumn'
          },
          {
            name: 'r0c18',
            caption: 'Spruce',
            type: 'colCaptionColumn'
          }
        ],
        [
          {
            name: 'r1c0',
            caption: '',
            type: 'rowCaptionColumn'
          },
          {
            name: 'r1c1',
            caption: '38928',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c2',
            caption: '38928',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c3',
            caption: '36711',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c4',
            caption: '36711',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c5',
            caption: '34577',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c6',
            caption: '34577',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c7',
            caption: '38928',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c8',
            caption: '38928',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c9',
            caption: '32006',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c10',
            caption: '32006',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c11',
            caption: '34577',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c12',
            caption: '34577',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c13',
            caption: '34577',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c14',
            caption: '34577',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c15',
            caption: '32007',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c16',
            caption: '32007',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c17',
            caption: '32006',
            type: 'colCaptionColumn'
          },
          {
            name: 'r1c18',
            caption: '32006',
            type: 'colCaptionColumn'
          }
        ],
        [
          {
            name: 'r2c0',
            caption: '',
            type: 'rowCaptionColumn'
          },
          {
            name: 'r2c1',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c2',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c3',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c4',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c5',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c6',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c7',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c8',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c9',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c10',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c11',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c12',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c13',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c14',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c15',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c16',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c17',
            caption: 'Population',
            type: 'colCaptionColumn'
          },
          {
            name: 'r2c18',
            caption: 'Avg Population',
            type: 'colCaptionColumn'
          }
        ]
      ],
      tableRows: [
        {
          r2c0: {
            '%ID': 'r2c0',
            ValueLogical: '',
            ValueFormatted: ''
          },
          r2c1: {
            '%ID': 'Cell_1',
            ValueLogical: 90000,
            Format: '',
            ValueFormatted: '90,000'
          },
          r2c2: {
            '%ID': 'Cell_2',
            ValueLogical: 90000,
            Format: '#,###.##',
            ValueFormatted: '90,000.00'
          },
          r2c3: {
            '%ID': 'Cell_3',
            ValueLogical: 49000,
            Format: '',
            ValueFormatted: '49,000'
          },
          r2c4: {
            '%ID': 'Cell_4',
            ValueLogical: 49000,
            Format: '#,###.##',
            ValueFormatted: '49,000.00'
          },
          r2c5: {
            '%ID': 'Cell_5',
            ValueLogical: 3000,
            Format: '',
            ValueFormatted: '3,000'
          },
          r2c6: {
            '%ID': 'Cell_6',
            ValueLogical: 3000,
            Format: '#,###.##',
            ValueFormatted: '3,000.00'
          },
          r2c7: {
            '%ID': 'Cell_7',
            ValueLogical: 33194,
            Format: '',
            ValueFormatted: '33,194'
          },
          r2c8: {
            '%ID': 'Cell_8',
            ValueLogical: 33194,
            Format: '#,###.##',
            ValueFormatted: '33,194.00'
          },
          r2c9: {
            '%ID': 'Cell_9',
            ValueLogical: 10333,
            Format: '',
            ValueFormatted: '10,333'
          },
          r2c10: {
            '%ID': 'Cell_10',
            ValueLogical: 10333,
            Format: '#,###.##',
            ValueFormatted: '10,333.00'
          },
          r2c11: {
            '%ID': 'Cell_11',
            ValueLogical: 4503,
            Format: '',
            ValueFormatted: '4,503'
          },
          r2c12: {
            '%ID': 'Cell_12',
            ValueLogical: 4503,
            Format: '#,###.##',
            ValueFormatted: '4,503.00'
          },
          r2c13: {
            '%ID': 'Cell_13',
            ValueLogical: 15060,
            Format: '',
            ValueFormatted: '15,060'
          },
          r2c14: {
            '%ID': 'Cell_14',
            ValueLogical: 15060,
            Format: '#,###.##',
            ValueFormatted: '15,060.00'
          },
          r2c15: {
            '%ID': 'Cell_15',
            ValueLogical: 29192,
            Format: '',
            ValueFormatted: '29,192'
          },
          r2c16: {
            '%ID': 'Cell_16',
            ValueLogical: 29192,
            Format: '#,###.##',
            ValueFormatted: '29,192.00'
          },
          r2c17: {
            '%ID': 'Cell_17',
            ValueLogical: 5900,
            Format: '',
            ValueFormatted: '5,900'
          },
          r2c18: {
            '%ID': 'Cell_18',
            ValueLogical: 5900,
            Format: '#,###.##',
            ValueFormatted: '5,900.00'
          }
        }
      ]
    }
  }
}