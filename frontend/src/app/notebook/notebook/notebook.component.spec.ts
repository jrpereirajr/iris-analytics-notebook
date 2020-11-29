import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { NotebookInterface } from '../notebook.models';
import { NotebookModule } from '../notebook.module';
import { NotebookComponent } from './notebook.component';

/**
 * @see https://jenniferwadella.com/blog/testing-forms-using-CVA
 */
@Component({
  template: `
  <form [formGroup]="notebookForm">
    <app-notebook formControlName="notebook"></app-notebook>
  </form>
  `
})
class TestHostComponent {
  @ViewChild(NotebookComponent, { static: true })
  public notebookComponent: NotebookComponent;

  public testData = null;
  public notebookForm = new FormGroup({
    notebook: new FormControl({ value: this.testData, disabled: true })
  });
}

fdescribe('NotebookComponent', () => {
  let hostFixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotebookComponent, TestHostComponent],
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent.notebookComponent).toBeTruthy();
  });

  it('should create with null value', () => {
    const compiled = hostFixture.debugElement.nativeElement;
    const component = compiled.querySelector('app-notebook');
    const content = [...component.querySelectorAll('div')];
    expect(content.length).toEqual(1);
    expect(content[0].innerText).toEqual('notebook.noNotebook');
  });

  it('should create with value', () => {
    const data = { name: 'foo' };
    testHostComponent.notebookForm.patchValue({ notebook: data });
    hostFixture.detectChanges();
    const compiled = hostFixture.debugElement.nativeElement;
    const component = compiled.querySelector('app-notebook');
    const content = [...component.querySelectorAll('div')];

    expect(testHostComponent.notebookForm.get('notebook').value).toBe(data);
    expect(content.length).toEqual(1);
    expect(content[0].innerText).toEqual(data.name);
  });
});
