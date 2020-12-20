import { CdkDrag, CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { NbCellComponent } from '../nb-cell/nb-cell.component';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions
} from 'ng-apexcharts';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NbCellPivotTableComponent),
  multi: true,
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  labels: string[];
  stroke: any; // ApexStroke;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

const defaultColMember = { Members: [{ Name: '%COUNT' }], MemberInfo: [{ levelName: '' }] };
const defaultRowMember = { Members: [{ Name: '' }], MemberInfo: [{ levelName: '' }] };

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
export class NbCellPivotTableComponent extends NbCellComponent implements OnInit, ControlValueAccessor {

  private cubeName;
  private sources;
  public sources$: Observable<any>;
  public dimensions$: Observable<any>;
  public measures$: Observable<any>;
  public query$: Observable<any>;
  public sourceInput = new FormControl();

  public dimensionsAvailable: DragDropItem[] = [];
  public measuresAvailable: DragDropItem[] = [];
  public rows: DragDropItem[] = [];
  public cols: DragDropItem[] = [];
  public measures: DragDropItem[] = [];
  public filters: DragDropItem[] = [];
  public filterSelection: any = {};

  public pivotView = 'table';

  public defaultColumns = [];
  public aditionalColumns: any[][] = [];
  public get defaultColumnsNames() {
    return this.defaultColumns.map(item => item.name);
  }
  public get aditionalColumnsNames() {
    return this.aditionalColumns.map(item =>
      item.map(subItem => subItem.name)
    );
  }
  public dataSource = new MatTableDataSource<any>();

  public chartOptions: Partial<ChartOptions>;
  public isDataOkForChart = true;

  public isExpanded = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // @ViewChild('chart') chart: ChartComponent;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    super();
    this.createChart();
  }

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
                  .filter(cube => cube.displayName.toLowerCase().includes(filterValue))
              })
            )
        )
      );
  }

  showMessage(msg) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  displayWith() {
    return (value) => value ? value.displayName : value;
  }

  onSelectSource(value) {
    this.cubeName = this.sourceInput.value.name;
    this.resetDropnDrop();
    this.query();
    this.dimensions$ = this.http.post(`http://localhost:52773/api/deepsee/v1/myapp/Info/Filters/${this.cubeName}`, {}, {
      headers: {
        Authorization: 'Basic c3VwZXJ1c2VyOlNZUw=='
      }
    });
    this.measures$ = this.http.post(`http://localhost:52773/api/deepsee/v1/myapp/Info/Measures/${this.cubeName}`, {}, {
      headers: {
        Authorization: 'Basic c3VwZXJ1c2VyOlNZUw=='
      }
    });

    this.dimensions$.subscribe(dimensions => {
      this.dimensionsAvailable = dimensions.Result.Filters.map(dimension => {
        return {
          type: DragDropItemType.DIMENSION,
          value: dimension.caption,
          data: {
            dimension,
            options: [],
            formControl: new FormControl()
          }
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

  getFilter(dimension) {
    return this.http.post(`http://localhost:52773/api/deepsee/v1/myapp/Info/FilterMembers/${this.cubeName}/${dimension}`, {}, {
      headers: {
        Authorization: 'Basic c3VwZXJ1c2VyOlNZUw=='
      }
    });
  }

  drop(event: CdkDragDrop<DragDropItem[]>) {
    if (event.item.data.msg) {
      this.showMessage(event.item.data.msg);
      event.item.data.msg = '';
    }

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
        this.query();
      }

    } else {
      const isDuplicated = event.container.data.indexOf(event.previousContainer.data[event.previousIndex]) > -1;
      if (isDuplicated) {
        this.showMessage('Item duplicated...');
        return;
      }

      const curr = event.previousContainer.data[event.previousIndex];
      if (curr.type === DragDropItemType.DIMENSION) {
        this.getFilter(curr.data.dimension.value).subscribe((data: any) => {
          curr.data.options = data.Result.FilterMembers.map(filterValues =>
            Object.assign({}, filterValues, { dimension: curr.data.dimension })
          );
        });
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
      this.query();
    }
  }

  dropDimensionsPredicate(item: CdkDrag<DragDropItem>) {
    return false;
  }

  dropMeasuresAvailablePredicate(item: CdkDrag<DragDropItem>) {
    return false;
  }

  dropRowsPredicate(item: CdkDrag<DragDropItem>) {
    const isOk = item.data.type === DragDropItemType.DIMENSION;
    item.data.msg = '';
    if (!isOk) {
      item.data.msg = 'Ops... only dimensions are allowed here.';
    }
    return isOk;
  }

  dropColsPredicate(item: CdkDrag<DragDropItem>) {
    // return item.data.type === DragDropItemType.DIMENSION;
    const isOk = item.data.type === DragDropItemType.DIMENSION;
    item.data.msg = '';
    if (!isOk) {
      item.data.msg = 'Ops... only dimensions are allowed here.';
    }
    return isOk;
  }

  dropMeasuresPredicate(item: CdkDrag<DragDropItem>) {
    // return item.data.type === DragDropItemType.MEASURE;
    const isOk = item.data.type === DragDropItemType.MEASURE;
    item.data.msg = '';
    if (!isOk) {
      item.data.msg = 'Ops... only measures are allowed here.';
    }
    return isOk;
  }

  dropFiltersPredicate(item: CdkDrag<DragDropItem>) {
    // return item.data.type === DragDropItemType.DIMENSION;
    const isOk = item.data.type === DragDropItemType.DIMENSION;
    item.data.msg = '';
    if (!isOk) {
      item.data.msg = 'Ops... only dimensions are allowed here.';
    }
    return isOk;
  }

  remove(type, idx) {
    if (type === 'rows') {
      this._remove(this.rows, idx);
    } else if (type === 'cols') {
      this._remove(this.cols, idx);
    } else if (type === 'selected-measures') {
      this._remove(this.measures, idx);
    } else if (type === 'filters') {
      if (idx) {
        this.filters[idx].data.formControl.reset();
      } else {
        this.filters.forEach(filter => filter.data.formControl.reset());
      }
      this._remove(this.filters, idx);
    }
    this.query();
  }

  private _remove(array: any[], idx) {
    let deleteCount = 1;
    if (typeof idx === 'undefined') {
      deleteCount = array.length;
    }
    array.splice(idx, deleteCount);
    this.query();
  }

  resetDropnDrop() {
    this.dimensionsAvailable = [];
    this.measuresAvailable = [];
    this.rows = [];
    this.cols = [];
    this.filters = [];
  }

  onFilterSelectionChange(selection, item) {
    this.filterSelection[item.value] = selection;
  }

  onSelectFilter(opened) {
    if (!opened) {
      this.query();
    }
  }

  private crossjoin(array: any[], i = 0) {
    let result;
    if (array.length === 1) {
      result = `NON EMPTY ${array[i]}`;
    } else if (i + 1 >= array.length) {
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

  getMDX() {
    const cubeName = this.sourceInput.value.name;
    const rows = this.crossjoin(this.rows.map(row => `${row.data.dimension.value}.Members`));
    const cols = this.crossjoin(this.cols
      .map(col => `${col.data.dimension.value}.Members`)
      .concat(this.measures.length > 0
        ? ['{' + this.measures.map(measure => `[Measures].[${measure.data.name}]`).join() + '}']
        : []
      )
    );
    const colsRows = [cols, rows]
      .map((item, idx) => item ? `${item} ON ${idx}` : '')
      .filter(item => item !== '')
      .join(',');
    const filters = Object.keys(this.filterSelection)
      .map(selection => this.filterSelection[selection].value
        .map(filter => `${filter.dimension.value}.${filter.value}`)
      )
      .map(filter => filter.length > 0 ? `%FILTER %OR({${filter.join()}})` : '')
      .join(' ');
    const mdx = `SELECT ${colsRows} FROM [${cubeName}] ${filters}`;
    return mdx;
  }

  sendQuery(mdx: string) {
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
      const tableData = this.processQueryResponse(resp);
      this.defaultColumns = tableData.tableColumns[tableData.tableColumns.length - 1];
      this.aditionalColumns = tableData.tableColumns.length > 1
        ? tableData.tableColumns.slice(0, tableData.tableColumns.length - 1)
        : [];
      this.setTableDataSource(tableData.tableRows);
      this.updateChart(resp);
    });
  }

  setTableDataSource(tableRows) {
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.data = tableRows;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      // console.log(item, property)
      // switch (property) {
      //   case 'fromDate': return new Date(item.fromDate);
      //   default: return item[property]?.ValueLogical;
      // }
      this.notImplementedMsg();
      return null;
    };
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      // console.log(data, filter);
      // return JSON.stringify(data).toLowerCase().indexOf(filter.toLowerCase()) > -1;
      this.notImplementedMsg();
      return null;
    }
  }

  notImplementedMsg() {
    this.showMessage('Sorry, not implemented yet... Stay tunned for upgrades!');
  }

  query() {
    const mdx = this.getMDX();
    this.sendQuery(mdx);
  }

  getAxysMembers(resp, axysIndex) {
    if (axysIndex === 0) {
      const colAxys = resp.Result.Axes[0] || { Tuples: [defaultColMember] };
      return JSON.parse(JSON.stringify(colAxys));
    } else {
      const rowAxys = resp.Result.Axes[1] || { Tuples: [defaultRowMember] };
      return JSON.parse(JSON.stringify(rowAxys));
    }
  }

  processQueryResponse(resp) {
    const colAxys = this.getAxysMembers(resp, 0) // resp.Result.Axes[0] || { Tuples: [defaultColMember] };
    const rowAxys = this.getAxysMembers(resp, 1); // resp.Result.Axes[1] || { Tuples: [defaultRowMember] };
    const colsCount = colAxys.Tuples.length;
    const rowsCount = rowAxys.Tuples.length;
    const rowAxysMembers = rowAxys.Tuples[0].Members;
    const colAxysMembers = colAxys.Tuples[0].Members;
    const rowsColumnsCount = rowAxysMembers.length;
    const colsColumnsCount = colAxysMembers.length;

    const rowsColumns = (colAxysMembers.length ? colAxysMembers : [defaultColMember])
      .map((colMember, colIdx) =>
        rowAxysMembers.map((rowMember, rowIdx) => {
          const key = `r${colIdx}c${rowIdx}`;
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
    tableColumns.map(array =>
      array.map((item, idx) => {
        item.name = `${item.name}_${salt[idx]}`
        return item;
      })
    );

    const rowsColumnsRows = rowAxys.Tuples.map((tuple, tupleIdx) => {
      return tuple.Members.reduce((acc, curr, memberIdx) => {
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
      const colIdx = (idx % colsCount) + rowsColumnsCount;
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

    return { tableColumns, tableRows };
  }

  applyTableFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getMembersFromAxys(resp, axysIndex) {
    return this.getAxysMembers(resp, axysIndex).Tuples.map(tuple =>
      tuple.MemberInfo.map(member => member.text)[0]
    )
      .filter(item => item);
  }

  getLabels(resp) {
    return this.getMembersFromAxys(resp, 1);
  }

  getSeries(resp) {
    const colAxys = this.getAxysMembers(resp, 0);
    const colsCount = colAxys.Tuples.length;
    const colTuples = colAxys.Tuples;
    return resp.Result.CellData.reduce((acc, curr, idx) => {
      const newIdx = idx % colsCount;
      if (!acc[newIdx]) {
        acc[newIdx] = [];
      }
      acc[newIdx].push(curr);
      return acc;
    }, [])
      .map((serie, idx) => ({
        name: colTuples[idx].Members.length > 0
          ? colTuples[idx].Members.map(member => member.Name)
          : ['%COUNT'],
        data: serie
      }));
  }

  updateChart(resp) {
    this.isDataOkForChart = this.rows.length <= 1 && this.measures.length <= 1;
    if (!this.isDataOkForChart) {
      return;
    }
    const series = this.getSeries(resp);
    console.log(series)
    this.chartOptions.labels = this.getLabels(resp);
    this.chartOptions.series = series.map((serie, idx) => ({
      name: serie.name.slice(this.measures.length).join(', '),
      data: serie.data.map(data => !data.ValueLogical ? null : data.ValueLogical),
      type: 'column' // ['column', 'area', 'line'][idx % 3]
    }));
    this.chartOptions.yaxis = [];
    series[0].name.slice(0, this.measures.length).forEach(name => {
      (this.chartOptions.yaxis as ApexYAxis[]).push({
        title: { text: name }
      });
    });
    console.log(this.chartOptions)
  }

  createChart() {
    this.chartOptions = {
      series: [
        // {
        //   name: 'TEAM A',
        //   type: 'column',
        //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        // },
        // {
        //   name: 'TEAM B',
        //   type: 'area',
        //   data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        // },
        // {
        //   name: 'TEAM C',
        //   type: 'line',
        //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        // }
      ],
      chart: {
        // height: 350,
        type: 'area',
        stacked: false
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      // labels: [
      //   '01/01/2003',
      //   '02/01/2003',
      //   '03/01/2003',
      //   '04/01/2003',
      //   '05/01/2003',
      //   '06/01/2003',
      //   '07/01/2003',
      //   '08/01/2003',
      //   '09/01/2003',
      //   '10/01/2003',
      //   '11/01/2003'
      // ],
      markers: {
        size: 0
      },
      // xaxis: {
      //   type: 'datetime'
      // },
      yaxis: [{
        // title: {
        //   text: 'Points'
        // },
        min: 0
      }],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter(y) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0) + ' points';
            }
            return y;
          }
        }
      }
    };
  }
}

enum DragDropItemType {
  DIMENSION,
  MEASURE
}

interface DragDropItem {
  type: DragDropItemType,
  value,
  data,
  msg
}