import { PIVOTTABLE_TEST01 } from './test-data-01';

export const PIVOTTABLE_TEST02 = {
  mdx: 'SELECT [Measures].[City Count] ON 0 FROM [CITIES]',
  resp: {
    Info:{
       Error:'',
       TimeStamp:'2020-12-13 11:53:17',
       ResultsComplete:1,
       PendingResults:0,
       MDXText:'SELECT [MEASURES].[CITY COUNT] ON 0 FROM [CITIES]',
       QueryKey:'ptbr4053971882',
       CubeKey:'CITIES',
       QueryID:'CITIES||ptbr4053971882',
       Cube:'CITIES',
       Pivot:'',
       QueryType:'SELECT',
       ListingSource:'',
       ColCount:1,
       RowCount:1
    },
    AxesInfo:[
       {
          '%ID':'SlicerInfo',
          Text:''
       },
       {
          '%ID':'AxisInfo_1',
          Text:'[MEASURES].[CITY COUNT]'
       },
       {
          '%ID':'AxisInfo_2',
          Text:'[%SEARCH]'
       }
    ],
    Result:{
       Axes:[
          {
             '%ID':'Axis_1',
             Tuples:[
                {
                   '%ID':'Tuple_1',
                   Members:[
                      {
                         '%ID':'Member_1',
                         Name:'City Count'
                      }
                   ],
                   MemberInfo:[
                      {
                         '%ID':'MemberInfo_1',
                         nodeNo:2,
                         text:'City Count',
                         dimName:'Measures',
                         hierName:'City Count',
                         levelName:'',
                         memberKey:'',
                         dimNo:0,
                         hierNo:2,
                         levelNo:0,
                         aggregate:'',
                         orSpec:''
                      }
                   ]
                }
             ],
             TupleInfo:[
                {
                   '%ID':'TupleInfo_1',
                   Error:'',
                   childSpec:''
                }
             ]
          }
       ],
       CellData:[
          {
             '%ID':'Cell_1',
             ValueLogical:9,
             Format:'#,###.##',
             ValueFormatted:'9.00'
          }
       ]
    }
 },
 expectations: {
   columnRows: 1,
   columnRowsCells: ['', 'City Count'],
   columnRowsCount: 2,
   rows: 1,
   cells: ['', '9.00'],
   cellsCount: 2,
   tableData: {
    tableColumns:[
       [
          {
             name:'r0c0',
             caption:'',
             type: 'rowCaptionColumn'
          },
          {
             name:'r0c1',
             caption:'City Count',
             type: 'colCaptionColumn'
          }
       ]
    ],
    tableRows:[
       {
          r0c0:{
             '%ID':'r0c0',
             ValueLogical:'',
             ValueFormatted:''
          },
          r0c1:{
             '%ID':'Cell_1',
             ValueLogical:9,
             Format:'#,###.##',
             ValueFormatted:'9.00'
          }
       }
    ]
 }
 }
};