import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private nbService: NotebookService) { }

  ngOnInit() {
    this.createForm();
    // this.setChangeValidate()
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
//       cell: [
// `# value

// ## value

// ### value`
//       ],
      cells: new FormArray([
        new FormControl({
          type: NotebookCellTypeEnum.MARKDOWN,
          content:
`# value

## value

### value`
        }),
        new FormControl({
          type: NotebookCellTypeEnum.PIVOT_TABLE,
          content: ''
        }),
        // new FormControl({
        //   type: NotebookCellTypeEnum.IRIS_ANALYTICS_URL,
        //   content: 'http://localhost:52773/csp/myapp/_DeepSee.UserPortal.DashboardViewer.zen?DASHBOARD=KPIs%20%26%20Plugins/Patients%20Plugins.dashboard'
        // }),
        // new FormControl({
        //   type: NotebookCellTypeEnum.IRIS_ANALYTICS_URL,
        //   content: 'http://localhost:52773/csp/myapp/_DeepSee.UserPortal.DashboardViewer.zen?DASHBOARD=Widget%20Examples/Scorecard%20with%20Plot%20Boxes.dashboard'
        // })
      ]),
      // email: [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      // password: [null, [Validators.required, this.checkPassword]],
      // description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      validate: ''
    });
  }

  // setChangeValidate() {
  //   this.formGroup.get('validate').valueChanges.subscribe(
  //     (validate) => {
  //       if (validate === '1') {
  //         this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
  //         this.titleAlert = 'You need to specify at least 3 characters';
  //       } else {
  //         this.formGroup.get('name').setValidators(Validators.required);
  //       }
  //       this.formGroup.get('name').updateValueAndValidity();
  //     }
  //   )
  // }

  get name() {
    return this.form.get('name') as FormControl
  }

  addCell(cellIndex: number) {
    this.cells.insert(cellIndex + 1, new FormControl());
  }

  removeCell(cellIndex: number) {
    this.cells.removeAt(cellIndex);
  }

  // checkPassword(control) {
  //   const enteredPassword = control.value
  //   const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  //   return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  // }

  // checkInUseEmail(control) {
  //   // mimic http database access
  //   const db = ['tony@gmail.com'];
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       const result = (db.indexOf(control.value) !== -1) ? { alreadyInUse: true } : null;
  //       observer.next(result);
  //       observer.complete();
  //     }, 4000)
  //   })
  // }

  // getErrorEmail() {
  //   return this.formGroup.get('email').hasError('required') ? 'Field is required' :
  //     this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
  //       this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  // }

  // getErrorPassword() {
  //   return this.formGroup.get('password').hasError('required')
  //     ? 'Field is required (at least eight characters, one uppercase letter and one number)'
  //     : this.formGroup.get('password').hasError('requirements')
  //       ? 'Password needs to be at least eight characters, one uppercase letter and one number'
  //       : '';
  // }

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

}
