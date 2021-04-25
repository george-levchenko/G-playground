import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GHeaderModule} from './header/header.module';
import {GFooterModule} from './footer/footer.module';



@NgModule({
  imports: [
    CommonModule,

    GHeaderModule,
    GFooterModule
  ],
  exports: [
    GHeaderModule,
    GFooterModule
  ]
})
export class GCommonsModule { }
