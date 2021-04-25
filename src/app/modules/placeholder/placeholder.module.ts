import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GPlaceholderComponent} from './placeholder.component';
import {GAngularMaterialModule} from '../../common/angular-material.module';
import {GSharedModule} from '../../common/shared.module';
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
