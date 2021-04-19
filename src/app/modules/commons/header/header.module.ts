import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GHeaderComponent} from './header.component';



@NgModule({
  declarations: [GHeaderComponent],
  exports: [
    GHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GHeaderModule { }
