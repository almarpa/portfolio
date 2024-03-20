import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  providers: [],
})
export class AppModule {}
