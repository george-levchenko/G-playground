import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, BellFill } from '@ant-design/icons-angular/icons';

import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzSelectModule} from 'ng-zorro-antd/select';

const icons: IconDefinition[] = [ UserOutline, BellFill ];

@NgModule({
  imports: [
    CommonModule,

    NzIconModule.forRoot(icons),
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzButtonModule,
    NzAvatarModule,
    NzSwitchModule,
    NzSelectModule
  ],
  exports: [
    NzIconModule,
    NzLayoutModule,
    NzGridModule,
    NzMenuModule,
    NzButtonModule,
    NzAvatarModule,
    NzSwitchModule,
    NzSelectModule
  ]
})
export class GZorroModule { }
