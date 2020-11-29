import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NotebookInterface } from '../notebook.models';

/**
 * @see https://dev.to/bitovi/understanding-angular-s-control-value-accessor-interface-5e7k
 */
@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NotebookComponent),
    multi: true
  }]
})
export class NotebookComponent implements OnInit, ControlValueAccessor {

  public value: NotebookInterface = { Name: 'foo' };
  public disabled: boolean;

  public inputControl: FormControl;

  public onChanged: any = () => { };
  public onTouched: any = () => { };

  constructor() { }

  ngOnInit() {
    this.inputControl = new FormControl(this.value.Name);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateSingleField(): void {
    this.value.Name = this.inputControl.value;
  }

  cancelSingleField(): void {
  }

}
