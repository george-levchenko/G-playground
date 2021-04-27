import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GEmptyComponent} from '../core/empty/empty.component';
import {GMoviesComponent} from './movies.component';

const moviesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GMoviesComponent
      },
      {
        path: ':id',
        component: GEmptyComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(moviesRoutes)
  ],
  exports: []
})
export class GMoviesRoutingModule {
}
