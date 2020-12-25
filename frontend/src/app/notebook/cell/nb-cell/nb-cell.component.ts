import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CellInterface, NotebookCellTypeEnum } from '../../notebook.models';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NbCellComponent),
  multi: true,
};

/**
 * @see https://javascript-conference.com/blog/angular-reactive-forms-building-custom-form-controls/
 */
@Component({
  selector: 'app-nb-cell',
  templateUrl: './nb-cell.component.html',
  styleUrls: ['./nb-cell.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class NbCellComponent implements OnInit, ControlValueAccessor {
  public _value: CellInterface = { type: NotebookCellTypeEnum.MARKDOWN, content: '' };
  protected backup: string;
  protected disabled: boolean;
  public cellStatus = 'result';
  public cellType = NotebookCellTypeEnum.MARKDOWN;
  public NotebookCellTypeEnum = NotebookCellTypeEnum;

  public get value(): CellInterface {
    return this._value;
  }

  public set value(_value: CellInterface) {
    this._value = _value;
  }

  protected onChanged: any = () => { };
  protected onTouched: any = () => { };

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    Object.assign(this._value, obj);
    this.onChanged(this._value);
    this.onTouched(this._value);
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

  onSourceCtrlEnter(event: KeyboardEvent) {
    this.cellStatus = 'result';
    this.writeValue(this._value);
    this.backup = '';
  }

  onSourceEsc(event: KeyboardEvent) {
    this.cellStatus = 'result';
    this.writeValue(this.backup);
    this.backup = '';
  }

  onResultDblClick(event) {
    this.cellStatus = 'edit';
    this.backup = this._value.content;
  }

}
