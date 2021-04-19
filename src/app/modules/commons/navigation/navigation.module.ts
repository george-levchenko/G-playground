import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GNavigationComponent} from './navigation.component';


@NgModule({
  declarations: [GNavigationComponent],
  exports: [
    GNavigationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GNavigationModule { }
