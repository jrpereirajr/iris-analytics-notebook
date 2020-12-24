import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditableConfig, EditableModule, EDITABLE_CONFIG } from '@ngneat/edit-in-place';
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

describe('NotebookComponent', () => {
  let hostFixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotebookComponent, TestHostComponent],
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        EditableModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: EDITABLE_CONFIG,
          useValue: {
            openBindingEvent: 'click',
            closeBindingEvent: 'click',
          } as EditableConfig,
        }
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
    const data: NotebookInterface = { id: '1', name: 'foo' };
    testHostComponent.notebookForm.patchValue({ notebook: data });
    hostFixture.detectChanges();
    const compiled = hostFixture.debugElement.nativeElement;
    const component = compiled.querySelector('app-notebook');
    const content = [...component.querySelectorAll('div')];

    expect(testHostComponent.notebookForm.get('notebook').value).toBe(data);
    expect(content.length).toEqual(1);
    expect(content[0].innerText.trim()).toEqual(data.name);
  });

  it('should change to edit mode when clicking on the text', () => {
    const data: NotebookInterface = { id: '1', name: 'foo' };
    testHostComponent.notebookForm.patchValue({ notebook: data });
    hostFixture.detectChanges();

    let edit;
    const compiled = hostFixture.debugElement.nativeElement;
    const component = compiled.querySelectorAll('[data-testid~="sample-input"]')[0];

    component.click();
    hostFixture.detectChanges();
    edit = hostFixture.debugElement.nativeElement.querySelectorAll('[data-testid~="sample-input-edit"]')[0];
    expect(edit).not.toBeUndefined();
  });

  it('should change to read only mode when clicking outside the editable component', () => {
    const data: NotebookInterface = { id: '1', name: 'foo' };
    testHostComponent.notebookForm.patchValue({ notebook: data });
    hostFixture.detectChanges();

    let edit;
    const compiled = hostFixture.debugElement.nativeElement;
    const component = compiled.querySelectorAll('[data-testid~="sample-input"]')[0];

    component.click();
    hostFixture.detectChanges();
    edit = hostFixture.debugElement.nativeElement.querySelectorAll('[data-testid~="sample-input-edit"]')[0];
    expect(edit).not.toBeUndefined();

    document.body.click();
    hostFixture.detectChanges();
    edit = hostFixture.debugElement.nativeElement.querySelectorAll('[data-testid~="sample-input-edit"]')[0];
    expect(edit).toBeUndefined();
  });

  it('should change component value when changing the input value', () => {
    const data: NotebookInterface = { id: '1', name: 'foo' };
    testHostComponent.notebookForm.patchValue({ notebook: data });
    hostFixture.detectChanges();

    let edit;
    const compiled = hostFixture.debugElement.nativeElement;
    const component = compiled.querySelectorAll('[data-testid~="sample-input"]')[0];

    component.click();
    hostFixture.detectChanges();
    edit = hostFixture.debugElement.nativeElement.querySelectorAll('[data-testid~="sample-input-edit"]')[0];
    expect(edit).not.toBeUndefined();

    edit.value = 'foo bar';
    edit.dispatchEvent(new Event('input'));
    hostFixture.detectChanges();

    document.body.click();
    hostFixture.detectChanges();
    edit = hostFixture.debugElement.nativeElement.querySelectorAll('[data-testid~="sample-input-edit"]')[0];
    expect(edit).toBeUndefined();

    expect(testHostComponent.notebookForm.get('notebook').value).toEqual(data);
  });

  it('should change edit value on value change', () => {
    const data: NotebookInterface = { id: '1', name: 'foo bar' };
    testHostComponent.notebookForm.patchValue({ notebook: data });
    hostFixture.detectChanges();

    let edit;
    const compiled = hostFixture.debugElement.nativeElement;
    const component = compiled.querySelectorAll('[data-testid~="sample-input"]')[0];

    component.click();
    hostFixture.detectChanges();
    edit = hostFixture.debugElement.nativeElement.querySelectorAll('[data-testid~="sample-input-edit"]')[0];

    expect(edit.value).toBe(data.name);
  });

  it('should send a touch event when item is selected', () => {
    const data: NotebookInterface = { id: '1', name: 'foo bar' };
    testHostComponent.notebookForm.patchValue({ notebook: data });
    hostFixture.detectChanges();

    let edit;
    const compiled = hostFixture.debugElement.nativeElement;
    const component = compiled.querySelectorAll('[data-testid~="sample-input"]')[0];

    component.click();
    hostFixture.detectChanges();
    edit = hostFixture.debugElement.nativeElement.querySelectorAll('[data-testid~="sample-input-edit"]')[0];

    edit.dispatchEvent(new Event('blur'));
    hostFixture.detectChanges();

    expect(testHostComponent.notebookForm.touched).toBe(true);
    expect(edit.classList.contains('ng-touched')).toBe(true);
  });

  // todo: onChange, disabled, isValid
});
