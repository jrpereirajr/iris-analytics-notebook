import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import * as _ from 'lodash';

import { NotebookCellTypeEnum, NotebookCellTypeEnumLabels, NotebookInterface } from '../notebook.models';
import { NotebookService } from '../services/notebook.service';

/**
 * @see https://dev.to/bitovi/understanding-angular-s-control-value-accessor-interface-5e7k
 * @see https://stackblitz.com/edit/example-angular-material-reactive-form?file=app%2Fapp.component.html
 * @see https://stackblitz.com/edit/angular-reactive-forms-array-b1esu9?file=app%2Fapp.component.ts
 */
@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {

  public form: FormGroup;
  public isNew = true;
  public titleAlert = 'This field is required';
  public cellTypes = Object.keys(NotebookCellTypeEnum);
  public NotebookCellTypeEnumLabels = NotebookCellTypeEnumLabels;
  public options: any[] = [];
  public filteredOptions: Observable<any[]>;

  get cells(): FormArray {
    return this.form.get('cells') as FormArray;
  }

  set cells(value: FormArray) {
    this.form.patchValue({ cells: value });
  }

  get name() {
    return this.form.get('name') as FormControl
  }

  get value(): NotebookInterface {
    return this.form.value;
  }

  set value(_value: NotebookInterface) {
    this.form.patchValue(_value);
  }

  @ViewChild('notebookName')
  public notebookName: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private nbService: NotebookService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();

    this.nbService.find().subscribe(resp => {
      this.options = resp.children;
      this.filteredOptions = this.form.get('name').valueChanges
        .pipe(
          debounceTime(300),
          startWith(''),
          map(value => this._filter(value))
        );
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: [null, Validators.required],
      cells: new FormArray([
        new FormControl({
          type: NotebookCellTypeEnum.MARKDOWN,
          content: ''
        })])
      // cells: new FormArray(data.cells.map(cell => new FormControl(cell))),
      //       cells: new FormArray([
      //         new FormControl({
      //           type: NotebookCellTypeEnum.MARKDOWN,
      //           content: 
      // `### My custom analysis for sales in 2020
      // ---`
      //         }),
      //         new FormControl({
      //           type: NotebookCellTypeEnum.MARKDOWN,
      //           content: 
      // `#### Revenue by region

      // *an important note here!*`
      //         }),
      //         new FormControl({
      //           type: NotebookCellTypeEnum.MARKDOWN,
      //           content: 
      // `#### A closer look, only in Americas:`
      //         }),
      //         new FormControl({
      //           type: NotebookCellTypeEnum.MARKDOWN,
      //           content: 
      // `#### And a legacy IRIS dashboard with relevant information for my analysis:`
      //         }),
      //         new FormControl({
      //           type: NotebookCellTypeEnum.IRIS_ANALYTICS_URL,
      //           content: 'http://localhost:52773/csp/myapp/_DeepSee.UserPortal.DashboardViewer.zen?DASHBOARD=Pareto%20Charts/Pareto%20Chart%20for%20Category.dashboard'
      //         }),
      //         new FormControl({
      //           type: NotebookCellTypeEnum.MARKDOWN,
      //           content: 
      // `#### My conclusions:
      // * Markdown are really nice!
      // * IRIS Analytics rocks!
      // * Notebooks are awsome! &#128516;`
      //         }),
      //         // new FormControl({
      //         //   type: NotebookCellTypeEnum.PIVOT_TABLE,
      //         //   content: ''
      //         // }),
      //         // new FormControl({
      //         //   type: NotebookCellTypeEnum.IRIS_ANALYTICS_URL,
      //         //   content: 'http://localhost:52773/csp/myapp/_DeepSee.UserPortal.DashboardViewer.zen?DASHBOARD=KPIs%20%26%20Plugins/Patients%20Plugins.dashboard'
      //         // }),
      //         // new FormControl({
      //         //   type: NotebookCellTypeEnum.IRIS_ANALYTICS_URL,
      //         //   content: 'http://localhost:52773/csp/myapp/_DeepSee.UserPortal.DashboardViewer.zen?DASHBOARD=Widget%20Examples/Scorecard%20with%20Plot%20Boxes.dashboard'
      //         // })
      //       ]),

    });
  }

  addCell(cellIndex: number) {
    this.cells.insert(cellIndex + 1, new FormControl({
      type: NotebookCellTypeEnum.MARKDOWN,
      content: ''
    }));
  }

  removeCell(cellIndex: number) {
    if (this.cells.length === 1) {
      return;
    }
    this.cells.removeAt(cellIndex);
  }

  newNotebook() {
    this.form.reset();
    this.cells.clear();
    this.form.setValue({
      id: null, name: '', cells: []
    });
    this.cells.insert(0, new FormControl({
      type: NotebookCellTypeEnum.MARKDOWN,
      content: ''
    }));
    this.nbService.find().subscribe(_resp => {
      this.options = _resp.children;
    });
    this.notebookName.nativeElement.focus();
  }

  save() {
    const notebook = _.cloneDeep(this.value);
    // remove property source from filter selection to avoid error of circular reference when JSON.stringify is applied
    notebook.cells.forEach(cell => {
      Object.keys(cell.content.filterSelection || {}).forEach(key => {
        delete cell.content.filterSelection[key].source;
      })
    });
    // ensures that name propery will be always a string
    if (typeof(notebook.name) !== 'string') {
      // tslint:disable-next-line:no-string-literal
      notebook.name = notebook.name['name'];
    }
    if (this.value.id === null) {
      this.nbService.create(notebook).subscribe(resp => {
        this.form.patchValue({ id: resp.Id });
        this.nbService.find().subscribe(_resp => {
          this.options = _resp.children;
        });
      });
    } else {
      this.nbService.update(notebook).subscribe(resp => {
        this.nbService.find().subscribe(_resp => {
          this.options = _resp.children;
        });
      });
    }
    this.showMessage('Notebook saved');
  }

  saveCopy() {
    this.form.get('id').patchValue(null);
    this.save();
  }

  read(notebookId) {
    this.nbService.read(notebookId).subscribe(notebook => {
      this.form.get('id').patchValue(notebook.id);
      this.cells.clear();
      (notebook.cells || [{
        type: NotebookCellTypeEnum.MARKDOWN, content: ''
      }]).forEach((cell, idx) => {
        this.cells.insert(idx, new FormControl(cell))
      });
    });
  }

  remove() {
    // todo: confirmation
    this.nbService.delete(this.value.id).subscribe(resp => {
      this.nbService.find().subscribe(_resp => {
        this.options = _resp.children;
      });
      this.showMessage('Notebook removed');
    });
    this.newNotebook();
  }

  changeCellType(cell, newCellType) {
    cell.value.type = newCellType;
  }

  showMessage(msg) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  notImplementedMsg() {
    this.showMessage('Sorry, not implemented yet... Stay tunned for upgrades!');
  }

  private _filter(value: string): any[] {
    if (typeof (value) !== 'string') return [];
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public getDisplayFn() {
    return (val) => val?.name;
  }

  onSelectNotebook(event) {
    this.read(event.option.value.ID);
  }

}
