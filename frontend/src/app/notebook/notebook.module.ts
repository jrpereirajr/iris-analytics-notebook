import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';

// import { EDITABLE_CONFIG, EditableConfig, EditableModule } from '@ngneat/edit-in-place';

import { MarkdownModule } from 'ngx-markdown';

import { SharedModule } from '../shared/shared.module';

import { NotebookRoutingModule } from './notebook-routing.module';
import { NotebookComponent } from './notebook/notebook.component';
import { NbCellComponent } from './cell/nb-cell/nb-cell.component';
import { NbCellMarkdownComponent } from './cell/nb-cell-markdown/nb-cell-markdown.component';
import { NbCellIrisAnalyticsComponent } from './cell/nb-cell-iris-analytics/nb-cell-iris-analytics.component';
import { NbCellPivotTableComponent } from './cell/nb-cell-pivot-table/nb-cell-pivot-table.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    NotebookComponent,
    NbCellComponent,
    NbCellMarkdownComponent,
    NbCellIrisAnalyticsComponent,
    NbCellPivotTableComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NotebookRoutingModule,
    // EditableModule,
    MarkdownModule.forRoot(),
    NgApexchartsModule
  ],
  providers: [
    // {
    //   provide: EDITABLE_CONFIG,
    //   useValue: {
    //     openBindingEvent: 'click',
    //     closeBindingEvent: 'click',
    //   } as EditableConfig,
    // }
  ],
  entryComponents: [
    NotebookComponent
  ],
})
export class NotebookModule { }
