import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GNavigationModule} from './navigation/navigation.module';
import {GHeaderModule} from './header/header.module';
import {GFooterModule} from './footer/footer.module';



@NgModule({
  imports: [
    CommonModule,

    GHeaderModule,
    GNavigationModule,
    GFooterModule
  ],
  exports: [
    GHeaderModule,
    GNavigationModule,
    GFooterModule
  ]
})
export class GCommonsModule { }
