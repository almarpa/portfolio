import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
