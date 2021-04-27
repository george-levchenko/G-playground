import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GMoviesComponent } from './movies.component';
import {GMoviesRoutingModule} from './movies-routing.module';


@NgModule({
  declarations: [GMoviesComponent],
  imports: [
    CommonModule,
    GMoviesRoutingModule
  ]
})
export class GMoviesModule { }
