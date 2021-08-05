import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GPlaceholderComponent} from './placeholder.component';
import {GAngularMaterialModule} from '../../common/angular-material.module';
import {TranslateModule} from '@ngx-translate/core';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';

@NgModule({
  declarations: [GPlaceholderComponent],
  exports: [
    GPlaceholderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,

    GAngularMaterialModule,
    NzGridModule,
    NzButtonModule
  ]
})
export class GPlaceholderModule { }
