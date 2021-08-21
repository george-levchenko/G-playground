import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {gStoreEffects, gStoreReducers} from './common/store';
import {environment} from '../environments/environment';
import {HttpLoaderFactory} from './common/utils';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GPlaceholderModule } from './modules/placeholder/placeholder.module';
import { GCoreModule } from './modules/core/core.module';
import {GZorroModule} from './common/zorro.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    StoreModule.forRoot(gStoreReducers, {metaReducers: []}),
    EffectsModule.forRoot(gStoreEffects),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    GZorroModule,

    GCoreModule,
    GPlaceholderModule
  ],
  exports: [GZorroModule],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
