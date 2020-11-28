import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';

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
    NotebookRoutingModule
  ],
  providers: [],
  entryComponents: [
    NotebookComponent
  ],
})
export class NotebookModule { }
