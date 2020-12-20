import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'notebook',
    pathMatch: 'full'
  },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // {
  //   path: 'shows',
  //   loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule),
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'notebook',
    loadChildren: () => import('./notebook/notebook.module').then(m => m.NotebookModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TranslateModule],
  exports: [RouterModule, TranslateModule]
})
export class AppRoutingModule { }
