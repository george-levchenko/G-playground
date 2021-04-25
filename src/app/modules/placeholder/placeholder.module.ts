import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GPlaceholderComponent} from './placeholder.component';
import {GAngularMaterialModule} from '../../shared/angular-material.module';
import {GSharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [GPlaceholderComponent],
  exports: [
    GPlaceholderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,

    GAngularMaterialModule
  ]
})
export class GPlaceholderModule { }
