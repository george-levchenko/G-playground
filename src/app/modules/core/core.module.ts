import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GEmptyComponent } from './empty/empty.component';
import { GPageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GWelcomeComponent } from './welcome/welcome.component';
import {GFooterComponent} from './footer/footer.component';
import {GHeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {GZorroModule} from '../../common/zorro.module';
import {FormsModule} from '@angular/forms';

const components = [
  GFooterComponent,
  GHeaderComponent,
  GWelcomeComponent,
  GEmptyComponent,
  GPageNotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    TranslateModule,
    GZorroModule
  ],
  declarations: [components],
  exports: [components]
})
export class GCoreModule { }
