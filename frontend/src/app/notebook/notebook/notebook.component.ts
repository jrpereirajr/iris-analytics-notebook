import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { NotebookCellTypeEnum, NotebookInterface } from '../notebook.models';
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

  form: FormGroup;
  value: NotebookInterface = { Id: '1', Name: 'foo' };
  isNew = true;
  titleAlert = 'This field is required';
  post: any = '';

  get cells(): FormArray {
    return this.form.get('cells') as FormArray;
  }

  set cells(value: FormArray) {
    this.form.setControl('cells', value);
  }

  constructor(
    private formBuilder: FormBuilder,
    private nbService: NotebookService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    // this.setChangeValidate()
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      cells: new FormArray([
        new FormControl({
          type: NotebookCellTypeEnum.MARKDOWN,
          content:
`# Monthly checkpoint - December, 2020
<hr>`
        }),
        new FormControl({
          type: NotebookCellTypeEnum.PIVOT_TABLE,
          content: ''
        }),
        new FormControl({
          type: NotebookCellTypeEnum.IRIS_ANALYTICS_URL,
          content: 'http://localhost:52773/csp/myapp/_DeepSee.UserPortal.DashboardViewer.zen?DASHBOARD=KPIs%20%26%20Plugins/Patients%20Plugins.dashboard'
        }),
        new FormControl({
          type: NotebookCellTypeEnum.IRIS_ANALYTICS_URL,
          content: 'http://localhost:52773/csp/myapp/_DeepSee.UserPortal.DashboardViewer.zen?DASHBOARD=Widget%20Examples/Scorecard%20with%20Plot%20Boxes.dashboard'
        })
      ]),
      validate: ''
    });
  }

  get name() {
    return this.form.get('name') as FormControl
  }

  addCell(cellIndex: number) {
    this.cells.insert(cellIndex + 1, new FormControl({
      type: NotebookCellTypeEnum.PIVOT_TABLE,
      content: ''
    }));
  }

  removeCell(cellIndex: number) {
    this.cells.removeAt(cellIndex);
  }

  onSubmit(post) {
    this.post = post;
  }

  save() {
    if (this.isNew) {
      this.nbService.create(this.value).subscribe(resp => console.log(resp));
    } else {
      this.nbService.update(this.value).subscribe(resp => console.log(resp));
    }
  }

  read(notebookId) {
    this.nbService.read(notebookId).subscribe(resp => console.log(resp));
  }

  list() {
    this.nbService.find().subscribe(resp => console.log(resp));
  }

  remove() {
    // todo: confirmation
    this.nbService.delete(this.value.Id).subscribe(resp => console.log(resp));
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

}
