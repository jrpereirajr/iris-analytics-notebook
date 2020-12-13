import { CdkDrag, CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { NbCellComponent } from '../nb-cell/nb-cell.component';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NbCellPivotTableComponent),
  multi: true,
};

/**
 * autocomplete:
 * @see https://material.angular.io/components/autocomplete/overview
 * @see https://stackblitz.com/angular/beaonoyrrgj?file=src%2Fapp%2Fautocomplete-filter-example.ts
 * @see https://stackoverflow.com/questions/47240929/angular-5-material-fetch-mat-options-in-autocomplete-select-list-from-backend
 * drag'n'drop:
 * @see https://material.angular.io/cdk/drag-drop/examples
 * @see https://stackblitz.com/edit/angular-xjex4y-uuwcde
 * table:
 * @see https://material.angular.io/components/table/examples
 * @see https://stackoverflow.com/a/56440755/345422
 * @see https://stackoverflow.com/a/53909896/345422
 * @see https://stackblitz.com/edit/angular-lnahlh?file=app%2Ftable-basic-example.html
 */
@Component({
  selector: 'app-nb-cell-pivot-table',
  templateUrl: './nb-cell-pivot-table.component.html',
  styleUrls: ['./nb-cell-pivot-table.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class NbCellPivotTableComponent extends NbCellComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  private sources;
  public sources$: Observable<any>;
  public dimensions$: Observable<any>;
  public measures$: Observable<any>;
  public query$: Observable<any>;
  public sourceInput = new FormControl();

  dimensionsAvailable: DragDropItem[] = [];
  measuresAvailable: DragDropItem[] = [];
  rows: DragDropItem[] = [];
  cols: DragDropItem[] = [];
  filters: DragDropItem[] = [];

  /// table example
  displayedColumns: any[] = [];
  displayedColumns2: any[][] = [];
  get displayedColumnsNames() {
    return this.displayedColumns.map(item => item.name);
  }
  get displayedColumnsNames2() {
    return this.displayedColumns2.map(item =>
      item.map(subItem => subItem.name)
    );
  }
  get displayedColumnsCaptions2() {
    return this.displayedColumns2.map(item =>
      item.map(subItem => subItem.caption)
    );
  }
  dataSource = new MatTableDataSource<any>();

  tables = [0];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ///

  constructor(private http: HttpClient) {
    super();
    this.tableExample();
    // window.comp = this;
  }

  /// table example
  tableExample() {
    // this.displayedColumns.length = 24;
    // this.displayedColumns.fill({ name: 'filler', caption: 'filler' });
    // this.displayedColumns = this.displayedColumns
    //   .map((item, idx) => ({
    //     name: `${item.name}${idx}`,
    //     caption: `${item.name}${idx}`
    //   }));

    // // The first two columns should be position and name; the last two columns: weight, symbol
    // this.displayedColumns[0] = { name: 'position', caption: 'Position' };
    // this.displayedColumns[1] = { name: 'name', caption: 'Name' };
    // this.displayedColumns[22] = { name: 'weight', caption: 'Weight' };
    // this.displayedColumns[23] = { name: 'symbol', caption: 'Symbol' };

    // this.displayedColumns2 = [[{
    //   name: 'header-row-second-group-1', caption: 'Second group 1'
    // }, {
    //   name: 'header-row-second-group-2', caption: 'Second group 2'
    // }]];

    // this.dataSource.data = ELEMENT_DATA;

    this.displayedColumns = colunas1;
    this.displayedColumns2 = colunas2;
    this.dataSource.data = linhas;
    this.dataSource.sortingDataAccessor = (item, property) => {
      console.log(item, property)
      switch (property) {
        case 'fromDate': return new Date(item.fromDate);
        default: return item[property]?.ValueLogical;
      }
    };
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      console.log(data, filter);
      return JSON.stringify(data).toLowerCase().indexOf(filter.toLowerCase()) > -1;
    }

    // window.dataSource = this.dataSource;
  }
  ///

  ngOnInit(): void {
    this.sources$ = this.sourceInput.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        // "replace" input stream into http stream (switchMap) that you'll subscribe in the template with "async" pipe,
        // it will run http request on input value changes
        switchMap(value =>
          (this.sources ? of(this.sources) :
            this.http.post<any>(`http://localhost:52773/api/deepsee/v1/myapp/Info/Cubes`, {}, {
              headers: {
                Authorization: 'Basic c3VwZXJ1c2VyOlNZUw=='
              }
            })
          )
            .pipe(
              map(stream => {
                const filterValue = value.toLowerCase ? value.toLowerCase() : value.displayName.toLowerCase()
                this.sources = stream;
                return stream.Result.Cubes
                  // .map(cube => cube.displayName)
                  .filter(cube => cube.displayName.toLowerCase().includes(filterValue))
              })
            )
        )
      );
  }

  ngAfterViewInit() {
    /// table example
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    ///
  }

  displayWith() {
    return (value) => value ? value.displayName : value;
  }

  onSelectSource(value) {
    const cubeName = this.sourceInput.value.name;
    this.getMDX();
    this.dimensions$ = this.http.post(`http://localhost:52773/api/deepsee/v1/myapp/Info/Filters/${cubeName}`, {}, {
      headers: {
        Authorization: 'Basic c3VwZXJ1c2VyOlNZUw=='
      }
    });
    this.measures$ = this.http.post(`http://localhost:52773/api/deepsee/v1/myapp/Info/Measures/${cubeName}`, {}, {
      headers: {
        Authorization: 'Basic c3VwZXJ1c2VyOlNZUw=='
      }
    });

    this.dimensions$.subscribe(dimensions => {
      this.dimensionsAvailable = dimensions.Result.Filters.map(dimension => {
        return {
          type: DragDropItemType.DIMENSION,
          value: dimension.caption,
          data: dimension
        };
      });
    });

    this.measures$.subscribe(measures => {
      this.measuresAvailable = measures.Result.Measures.map(measure => {
        return {
          type: DragDropItemType.MEASURE,
          value: measure.caption,
          data: measure
        };
      });
    });
  }

  drop(event: CdkDragDrop<DragDropItem[]>) {
    const prevContainerClassList = event.previousContainer.element.nativeElement.classList;
    const isDimensionOrMeasure = ['dimensions-list', 'measures-list']
      .filter(cls => prevContainerClassList.contains(cls)).length > 0;

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (!isDimensionOrMeasure) {
        this.getMDX();
      }

    } else {
      const isDuplicated = event.container.data.indexOf(event.previousContainer.data[event.previousIndex]) > -1;
      if (isDuplicated) {
        console.log('isDuplicated')
        return;
      }

      const curr = event.previousContainer.data[event.previousIndex];
      if (curr.type === DragDropItemType.MEASURE) {
        const alreadyHasMeasure = event.container.data.findIndex(item => item.type === DragDropItemType.MEASURE) > -1;
        if (alreadyHasMeasure) {
          console.log('alreadyHasMeasure')
          return;
        }
      }

      if (isDimensionOrMeasure) {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      }
      this.getMDX();
    }
  }

  dropDimensionsPredicate(item: CdkDrag<DragDropItem>) {
    return false;
  }

  dropMeasuresPredicate(item: CdkDrag<DragDropItem>) {
    return false;
  }

  dropRowsPredicate(item: CdkDrag<DragDropItem>) {
    return [DragDropItemType.DIMENSION].indexOf(item.data.type) !== -1;
  }

  dropColsPredicate(item: CdkDrag<DragDropItem>) {
    return [DragDropItemType.DIMENSION, DragDropItemType.MEASURE].indexOf(item.data.type) !== -1
  }

  dropFiltersPredicate(item: CdkDrag<DragDropItem>) {
    return [DragDropItemType.DIMENSION].indexOf(item.data.type) !== -1;
  }

  remove(type, idx) {
    if (type === 'rows') {
      this._remove(this.rows, idx);
    } else if (type === 'cols') {
      this._remove(this.cols, idx);
    } else {
      this._remove(this.filters, idx);
    }
  }

  private _remove(array: any[], idx) {
    let deleteCount = 1;
    if (typeof idx === 'undefined') {
      deleteCount = array.length;
    }
    array.splice(idx, deleteCount);
    this.getMDX();
  }

  private crossjoin(array: any[], i = 0) {
    let result;
    if (i + 1 >= array.length) {
      result = array[i];
    } else {
      if (i + 2 >= array.length) {
        result = `NONEMPTYCROSSJOIN(${array[i]}, ${array[i + 1]})`;
      } else {
        result = `NONEMPTYCROSSJOIN(${array[i]}, ${this.crossjoin(array, i + 1)})`;
      }
      if (i === 0) {
        result = `NON EMPTY HEAD(${result}, 2000, SAMPLE)`
      }
    }
    return result;
  }

  private reshape2D(array, rowsCount) {
    return array.reduce((acc, curr, idx) => {
      if (idx % rowsCount === 0) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);
  }

  getMDX() {
    const cubeName = this.sourceInput.value.name;
    const rows = this.crossjoin(this.rows.map(row => `${row.data.value}.Members`));
    const cols = this.crossjoin(this.cols.map(col => {
      return col.type === DragDropItemType.MEASURE ? `[Measures].[${col.data.name}]` : `${col.data.value}.Members`
    }));
    const colsRows = [cols, rows]
      .map((item, idx) => item ? `${item} ON ${idx}` : '')
      .filter(item => item !== '')
      .join(',');
    const mdx = `SELECT ${colsRows} FROM [${cubeName}]`;
    console.log(mdx);
    this.query(mdx);
  }

  query(mdx: string) {
    this.query$ = this.http.post(`http://localhost:52773/api/deepsee/v1/myapp/Data/MDXExecute`, {
      MDX: mdx
    }, {
      headers: {
        Authorization: 'Basic c3VwZXJ1c2VyOlNZUw==',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Origin': '*'
      }
    });
    this.query$.subscribe(resp => {
      console.log(resp)
      const tableData = this.processQueryResponse(resp);
      this.dataSource = new MatTableDataSource<any>();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.displayedColumns = tableData.tableColumns[tableData.tableColumns.length - 1];
      this.displayedColumns2 = tableData.tableColumns.length > 1
        ? tableData.tableColumns.slice(0, tableData.tableColumns.length - 1)
        : [];
      this.dataSource.data = tableData.tableRows;

      // window['data'] = resp;

      // if (resp.Result.Axes.length === 0) {
      //   // simplest query (just a SELECT FROM [source])
      //   this.displayedColumns = [{ name: 'ValueFormatted', caption: 'ValueFormatted' }];
      //   this.dataSource.data = resp.Result.CellData;

      // } else if (resp.Result.Axes.length >= 1) {
      //   const colsCount = resp.Result.Axes[0].Tuples[0].Members.length || 1;
      //   const rowsCount = resp.Result.Axes[1]?.Tuples[0].Members.length || 0;

      //   const tableCols = (this.getAxysValues(resp, 0)[0] || [{ Name: '%COUNT' }])
      //     .map(item => ({ name: item.Name, caption: item.Name }));
      //   const tableRows = resp.Result.CellData.reduce((acc, curr, idx) => {
      //     if (idx % tableCols.length === 0) {
      //       acc.push({});
      //     }
      //     const key = tableCols[idx % tableCols.length];
      //     Object.assign(acc[acc.length - 1], { [key.name]: curr });
      //     return acc;
      //   }, []);

      //   // add columns for rows labels
      //   const newCols = (resp.Result.Axes[1]?.Tuples[0].MemberInfo || []).map(member => member.levelName);
      //   const newRows = (this.getAxysValues(resp, 1) || [[]])[0].map(item => ({ ValueFormatted: item.Name }));

      //   // merge all columns
      //   this.displayedColumns = newCols.concat(tableCols);
      //   this.dataSource.data = tableRows
      //     .map((row, rowIdx) => {
      //       newCols.forEach((newCol, newColIdx) => {
      //         row = Object.assign(row, { [newCols[newColIdx]]: newRows[rowIdx] });
      //       });
      //       return row;
      //     });

      // } else {
      //   this.tableExample();
      // }
    });
  }

  getAxysValues(data, axys) {
    return data.Result.Axes[axys]?.Tuples.map(tuple => tuple.Members).reduce((acc, curr) => {
      for (let idx = 0; idx < data.Result.Axes[axys].Tuples[0].Members.length; idx++) {
        if (!acc[idx]) {
          acc[idx] = [];
        }
        acc[idx].push(curr[idx]);
      };
      return acc;
    }, []);
  }

  processQueryResponse(resp) {
    const defaultRowMember = { Members: [{ Name: '' }], MemberInfo: [{levelName: ''}] };
    const defaultColMember = { Members: [{ Name: '%COUNT' }], MemberInfo: [{levelName: ''}] };
    const colAxys = resp.Result.Axes[0] || { Tuples: [defaultColMember] };
    const rowAxys = resp.Result.Axes[1] || { Tuples: [defaultRowMember] };
    const rowsCount = rowAxys.Tuples.length;
    const colsCount = colAxys.Tuples.length;
    const rowAxysMembers = rowAxys.Tuples[0].Members;
    const colAxysMembers = colAxys.Tuples[0].Members;
    const rowsColumnsCount = rowAxysMembers.length;
    const colsColumnsCount = colAxysMembers.length;

    const rowsColumns = (colAxysMembers.length ? colAxysMembers : [defaultColMember])
      .map((colMember, colIdx) =>
        rowAxysMembers.map((rowMember, rowIdx) => {
          const key = `r${colIdx}c${rowIdx}`;
          // const key = `c${rowIdx}`;
          return {
            name: key,
            caption: rowAxys.Tuples[0].MemberInfo[rowAxysMembers.length - 1 - rowIdx].levelName,
            type: 'rowCaptionColumn'
          }
        })
      );
    const colsColumns = (colAxysMembers.length ? colAxysMembers : [defaultColMember]).map((member, memberIdx) =>
      (colAxysMembers.length ? colAxys.Tuples : [defaultColMember]).map((tuple, tupleIdx) => {
        const key = `r${memberIdx}c${tupleIdx + rowsColumnsCount}`;
        // const key = `c${tupleIdx + rowsColumnsCount}`;
        return {
          name: key,
          caption: tuple.Members[tuple.Members.length - memberIdx - 1].Name,
          type: 'colCaptionColumn'
        }
      })
    );
    const tableColumns = rowsColumns.map((rowColumn, idx) => rowColumn.concat(colsColumns[idx]));

    // dirty hack to force mat-table to update it columns
    const salt = new Array(tableColumns[0].length).fill(0).map(item => `${btoa(Math.random().toString())}`);
    // if (tableColumns.length > 1) {
      // tableColumns.slice(1).map(array =>
      tableColumns.map(array =>
        array.map((item, idx) => {
          item.name = `${item.name}_${salt[idx]}`
          return item;
        })
      );
    // }

    const rowsColumnsRows = rowAxys.Tuples.map((tuple, tupleIdx) => {
      return tuple.Members.reduce((acc, curr, memberIdx) => {
        // const key = `r${tupleIdx}c${memberIdx}`;
        // const saltString = tableColumns.length > 1 ? `_${salt[memberIdx]}` : '';
        const saltString = `_${salt[tuple.Members.length - 1 - memberIdx]}`;
        const key = `r${tableColumns.length - 1}c${tuple.Members.length - 1 - memberIdx}${saltString}`;
        return Object.assign(acc, {
          [key]: {
            '%ID': curr['%ID'] || key,
            ValueLogical: curr.Name, ValueFormatted: curr.Name
          }
        })
      }, {});
    });
    const colsColumnsRows = resp.Result.CellData.reduce((acc, curr, idx) => {
      // const key = `r${acc.length - 1}c${(idx % colsCount) + rowsColumnsCount}`;
      const colIdx = (idx % colsCount) + rowsColumnsCount;
      // const saltString = tableColumns.length > 1 ? `_${salt[colIdx]}` : '';
      const saltString = `_${salt[colIdx]}`;
      const key = `r${tableColumns.length - 1}c${colIdx}${saltString}`;
      if (idx % colsCount === 0) {
        acc.push({});
      }
      Object.assign(acc[acc.length - 1], {
        [key]: curr
      })
      return acc;
    }, []);
    const tableRows = rowsColumnsRows.map((row, idx) => Object.assign(row, colsColumnsRows[idx]));

    // tableColumns.map(columns => columns.slice(0, columns.length - 1).reverse().concat(columns[columns.length - 1]));

    window['tableData'] = { tableColumns, tableRows }
    console.log({ tableColumns, tableRows });
    return { tableColumns, tableRows };
  }

  /// table example
  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ///
}

enum DragDropItemType {
  DIMENSION,
  MEASURE
}

interface DragDropItem {
  type: DragDropItemType,
  value,
  data
}

/// table example

export interface PeriodicElement {
  name: string | object;
  position: number | object;
  weight: number | object;
  symbol: string | object;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  // { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  // { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  // { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  // { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: { value: 1 }, name: { value: 'Hydrogen' }, weight: { value: 1.0079 }, symbol: { value: 'H' } },
  { position: { value: 2 }, name: { value: 'Helium' }, weight: { value: 4.0026 }, symbol: { value: 'He' } },
  { position: { value: 3 }, name: { value: 'Lithium' }, weight: { value: 6.941 }, symbol: { value: 'Li' } },
  { position: { value: 4 }, name: { value: 'Beryllium' }, weight: { value: 9.0122 }, symbol: { value: 'Be' } },
  { position: { value: 5 }, name: { value: 'Boron' }, weight: { value: 10.811 }, symbol: { value: 'B' } },
  { position: { value: 6 }, name: { value: 'Carbon' }, weight: { value: 12.0107 }, symbol: { value: 'C' } },
  { position: { value: 7 }, name: { value: 'Nitrogen' }, weight: { value: 14.0067 }, symbol: { value: 'N' } },
  { position: { value: 8 }, name: { value: 'Oxygen' }, weight: { value: 15.9994 }, symbol: { value: 'O' } },
  { position: { value: 9 }, name: { value: 'Fluorine' }, weight: { value: 18.9984 }, symbol: { value: 'F' } },
  { position: { value: 10 }, name: { value: 'Neon' }, weight: { value: 20.1797 }, symbol: { value: 'Ne' } },
];
///

const colunas1 = [
  { name: 'r0c0', caption: 'City', type: 'rowCaptionColumn' },
  { name: 'r0c1', caption: '32006', type: 'colCaptionColumn' },
  { name: 'r0c2', caption: '32007', type: 'colCaptionColumn' },
  { name: 'r0c3', caption: '34577', type: 'colCaptionColumn' },
  { name: 'r0c4', caption: '36711', type: 'colCaptionColumn' },
  { name: 'r0c5', caption: '38928', type: 'colCaptionColumn' }
];

const colunas2 = [[
  { name: 'r1c0', caption: 'City', type: 'rowCaptionColumn' },
  { name: 'r1c1', caption: 'Avg Population', type: 'colCaptionColumn' },
  { name: 'r1c2', caption: 'Avg Population', type: 'colCaptionColumn' },
  { name: 'r1c3', caption: 'Avg Population', type: 'colCaptionColumn' },
  { name: 'r1c4', caption: 'Avg Population', type: 'colCaptionColumn' },
  { name: 'r1c5', caption: 'Avg Population', type: 'colCaptionColumn' }
], [
  { name: 'r2c0', caption: 'City', type: 'rowCaptionColumn' },
  { name: 'r2c1', caption: 'Avg Population', type: 'colCaptionColumn' },
  { name: 'r2c2', caption: 'Avg Population', type: 'colCaptionColumn' },
  { name: 'r2c3', caption: 'Avg Population', type: 'colCaptionColumn' },
  { name: 'r2c4', caption: 'Avg Population', type: 'colCaptionColumn' },
  { name: 'r2c5', caption: 'Avg Population', type: 'colCaptionColumn' }
]];

const linhas = [{
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Cedar Falls', ValueFormatted: 'Cedar Falls' },
  r0c1: { '%ID': 'Cell_1', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c2: { '%ID': 'Cell_2', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c3: { '%ID': 'Cell_3', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c4: { '%ID': 'Cell_4', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c5: { '%ID': 'Cell_5', ValueLogical: 90000, Format: '#,###.##', ValueFormatted: '90,000.00' }
}, {
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Centerville', ValueFormatted: 'Centerville' },
  r0c1: { '%ID': 'Cell_6', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c2: { '%ID': 'Cell_7', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c3: { '%ID': 'Cell_8', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c4: { '%ID': 'Cell_9', ValueLogical: 49000, Format: '#,###.##', ValueFormatted: '49,000.00' },
  r0c5: { '%ID': 'Cell_10', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' }
}, {
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Cypress', ValueFormatted: 'Cypress' },
  r0c1: { '%ID': 'Cell_11', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c2: { '%ID': 'Cell_12', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c3: { '%ID': 'Cell_13', ValueLogical: 3000, Format: '#,###.##', ValueFormatted: '3,000.00' },
  r0c4: { '%ID': 'Cell_14', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c5: { '%ID': 'Cell_15', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' }
}, {
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Elm Heights', ValueFormatted: 'Elm Heights' },
  r0c1: { '%ID': 'Cell_16', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c2: { '%ID': 'Cell_17', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c3: { '%ID': 'Cell_18', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c4: { '%ID': 'Cell_19', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c5: { '%ID': 'Cell_20', ValueLogical: 33194, Format: '#,###.##', ValueFormatted: '33,194.00' }
}, {
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Juniper', ValueFormatted: 'Juniper' },
  r0c1: { '%ID': 'Cell_21', ValueLogical: 10333, Format: '#,###.##', ValueFormatted: '10,333.00' },
  r0c2: { '%ID': 'Cell_22', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c3: { '%ID': 'Cell_23', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c4: { '%ID': 'Cell_24', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c5: { '%ID': 'Cell_25', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' }
}, {
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Magnolia', ValueFormatted: 'Magnolia' },
  r0c1: { '%ID': 'Cell_26', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c2: { '%ID': 'Cell_27', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c3: { '%ID': 'Cell_28', ValueLogical: 4503, Format: '#,###.##', ValueFormatted: '4,503.00' },
  r0c4: { '%ID': 'Cell_29', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c5: { '%ID': 'Cell_30', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' }
}, {
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Pine', ValueFormatted: 'Pine' },
  r0c1: { '%ID': 'Cell_31', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c2: { '%ID': 'Cell_32', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c3: { '%ID': 'Cell_33', ValueLogical: 15060, Format: '#,###.##', ValueFormatted: '15,060.00' },
  r0c4: { '%ID': 'Cell_34', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c5: { '%ID': 'Cell_35', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' }
}, {
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Redwood', ValueFormatted: 'Redwood' },
  r0c1: { '%ID': 'Cell_36', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c2: { '%ID': 'Cell_37', ValueLogical: 29192, Format: '#,###.##', ValueFormatted: '29,192.00' },
  r0c3: { '%ID': 'Cell_38', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c4: { '%ID': 'Cell_39', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c5: { '%ID': 'Cell_40', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' }
}, {
  r0c0: { '%ID': 'Member_1', ValueLogical: 'Spruce', ValueFormatted: 'Spruce' },
  r0c1: { '%ID': 'Cell_41', ValueLogical: 5900, Format: '#,###.##', ValueFormatted: '5,900.00' },
  r0c2: { '%ID': 'Cell_42', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c3: { '%ID': 'Cell_43', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c4: { '%ID': 'Cell_44', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' },
  r0c5: { '%ID': 'Cell_45', ValueLogical: '', Format: '#,###.##', ValueFormatted: '' }
}];