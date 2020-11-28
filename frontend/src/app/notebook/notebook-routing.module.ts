import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebookComponent } from './notebook/notebook.component';


export const routes: Routes = [
  {
    path: '',
    component: NotebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotebookRoutingModule { }
