import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GPlaceholderComponent} from './placeholder.component';
import {GAngularMaterialModule} from '../../shared/angular-material.module';



@NgModule({
  declarations: [GPlaceholderComponent],
  exports: [
    GPlaceholderComponent
  ],
  imports: [
    CommonModule,

    GAngularMaterialModule
  ]
})
export class GPlaceholderModule { }
