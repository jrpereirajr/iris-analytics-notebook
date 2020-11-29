import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';

import { EDITABLE_CONFIG, EditableConfig, EditableModule } from '@ngneat/edit-in-place';

import { NotebookComponent } from './notebook/notebook.component';
import { SharedModule } from '../shared/shared.module';
import { NotebookRoutingModule } from './notebook-routing.module';

@NgModule({
  declarations: [NotebookComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NotebookRoutingModule,
    EditableModule
  ],
  providers: [
    {
      provide: EDITABLE_CONFIG,
      useValue: {
        openBindingEvent: 'click',
        closeBindingEvent: 'click',
      } as EditableConfig,
    }
  ],
  entryComponents: [
    NotebookComponent
  ],
})
export class NotebookModule { }
