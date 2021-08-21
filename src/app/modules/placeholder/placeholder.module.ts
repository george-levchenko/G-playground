import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GPlaceholderComponent} from './placeholder.component';
import {GAngularMaterialModule} from '../../common/angular-material.module';
import {TranslateModule} from '@ngx-translate/core';
import {GZorroModule} from '../../common/zorro.module';

@NgModule({
  declarations: [GPlaceholderComponent],
  exports: [
    GPlaceholderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,

    GZorroModule,
    GAngularMaterialModule
  ]
})
export class GPlaceholderModule { }
