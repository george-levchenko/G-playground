import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GPageNotFoundComponent} from './modules/core/page-not-found/page-not-found.component';
import {GEmptyComponent} from './modules/core/empty/empty.component';
import {GPlaceholderComponent} from './modules/placeholder/placeholder.component';

const routes: Routes = [
  { path: 'movies', loadChildren: () => import('./modules/movies/movies.module').then(m => m.GMoviesModule) },
  { path: 'gallery', component: GEmptyComponent },
  { path: 'author', component: GEmptyComponent, canActivate: [] },
  { path: 'login', component: GEmptyComponent },
  { path: 'welcome', component: GPlaceholderComponent },
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: GPageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
