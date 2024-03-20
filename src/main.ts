/// <reference types="@angular/localize" />

import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {environment} from './environments/environment.prod';
import {enableProdMode} from '@angular/core';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
