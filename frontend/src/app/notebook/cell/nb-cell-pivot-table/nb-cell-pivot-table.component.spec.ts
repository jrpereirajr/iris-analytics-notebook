import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { NbCellPivotTableComponent } from './nb-cell-pivot-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { PIVOTTABLE_TEST01 } from './test-data/test-data-01';
import { PIVOTTABLE_TEST02 } from './test-data/test-data-02';
import { PIVOTTABLE_TEST03 } from './test-data/test-data-03';
import { PIVOTTABLE_TEST04 } from './test-data/test-data-04';
import { PIVOTTABLE_TEST05 } from './test-data/test-data-05';
import { PIVOTTABLE_TEST06 } from './test-data/test-data-06';
import { PIVOTTABLE_TEST07 } from './test-data/test-data-07';
import { PIVOTTABLE_TEST08 } from './test-data/test-data-08';
import { PIVOTTABLE_TEST09 } from './test-data/test-data-09';
import { PIVOTTABLE_TEST10 } from './test-data/test-data-10';
import { PIVOTTABLE_TEST11 } from './test-data/test-data-11';
import { MatSelectModule } from '@angular/material/select';

const url = `http://localhost:52773/api/deepsee/v1/myapp/Data/MDXExecute`;

fdescribe('NbCellPivotTableComponent', () => {
  let component: NbCellPivotTableComponent;
  let fixture: ComponentFixture<NbCellPivotTableComponent>;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NbCellPivotTableComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatDividerModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatCardModule,
        MatTooltipModule,
        MatGridListModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        DragDropModule,
        MatSelectModule,
        MatButtonToggleModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbCellPivotTableComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const querySelectors = {
    columnRows: 'div.table-container.mat-elevation-z8 > mat-table > mat-header-row',
    columnRowsCells: 'div.table-container.mat-elevation-z8 > mat-table > mat-header-row > mat-header-cell',
    rows: 'div.table-container.mat-elevation-z8 > mat-table > mat-row',
    cells: 'div.table-container.mat-elevation-z8 > mat-table > mat-row > mat-cell'
  };

  const removeSalt = (stringJSON) => {
    return stringJSON.replaceAll(/_[^"]+"/g, '"');
  };

  const tmp = () => {
    const array = [
      Array.from(document.querySelectorAll('div.table-container.mat-elevation-z8 > mat-table > mat-header-row > mat-header-cell'))
        // tslint:disable-next-line:no-string-literal
        .map(item => item['innerText']),
      Array.from(document.querySelectorAll('div.table-container.mat-elevation-z8 > mat-table > mat-row > mat-cell'))
        // tslint:disable-next-line:no-string-literal
        .map(item => item['innerText'])
    ];
    console.log(array, JSON.stringify(array[0]), JSON.stringify(array[1]))
  }

  const testTemplate = (testData) => {
    const tableData = component.processQueryResponse(testData.resp);
    expect(removeSalt(JSON.stringify(tableData)))
      .toEqual(removeSalt(JSON.stringify(testData.expectations.tableData)));

    fixture.detectChanges();
    component.dataSource.paginator.pageSize = 10;

    component.sendQuery(testData.mdx);
    const req = httpMock.expectOne(url);
    req.flush(testData.resp);

    fixture.detectChanges();
    let content;
    let compiled;

    compiled = fixture.debugElement.nativeElement;
    content = [...compiled.querySelectorAll(querySelectors.columnRows)];
    expect(content.length).toEqual(testData.expectations.columnRows);

    compiled = fixture.debugElement.nativeElement;
    content = [...compiled.querySelectorAll(querySelectors.columnRowsCells)];
    expect(content.length).toEqual(testData.expectations.columnRowsCount);
    expect(content.map(item => item.innerText)).toEqual(testData.expectations.columnRowsCells);

    compiled = fixture.debugElement.nativeElement;
    content = [...compiled.querySelectorAll(querySelectors.rows)];
    expect(content.length).toEqual(testData.expectations.rows);

    compiled = fixture.debugElement.nativeElement;
    content = [...compiled.querySelectorAll(querySelectors.cells)];
    expect(content.length).toEqual(testData.expectations.cellsCount);
    expect(content.map(item => item.innerText)).toEqual(testData.expectations.cells);
  }

  fit('should process IRIS analytics query 01', () => {
    const testData = PIVOTTABLE_TEST01;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 02', () => {
    const testData = PIVOTTABLE_TEST02;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 03', () => {
    const testData = PIVOTTABLE_TEST03;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 04', () => {
    const testData = PIVOTTABLE_TEST04;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 05', () => {
    const testData = PIVOTTABLE_TEST05;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 06', () => {
    const testData = PIVOTTABLE_TEST06;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 07', () => {
    const testData = PIVOTTABLE_TEST07;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 08', () => {
    const testData = PIVOTTABLE_TEST08;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 09', () => {
    const testData = PIVOTTABLE_TEST09;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 10', () => {
    const testData = PIVOTTABLE_TEST10;
    testTemplate(testData);
  });

  fit('should process IRIS analytics query 11', () => {
    const testData = PIVOTTABLE_TEST11;
    testTemplate(testData);
  });
});
