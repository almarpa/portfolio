import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [],
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
