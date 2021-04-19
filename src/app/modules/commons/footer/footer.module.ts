import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GFooterComponent} from './footer.component';



@NgModule({
  declarations: [GFooterComponent],
  exports: [
    GFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GFooterModule { }
