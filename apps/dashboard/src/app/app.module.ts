
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material2Module } from '@workshop/material2';
import { PrimeNgModule } from '@workshop/prime-ng';
import { FxlayoutTestComponent } from './fxlayout-test/fxlayout-test.component';
import { XdTestComponent } from './xd-test/xd-test.component';
import { AnimationdemoComponent } from './animationdemo/animationdemo.component';
@NgModule({
  declarations: [AppComponent, FxlayoutTestComponent, XdTestComponent, AnimationdemoComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    Material2Module,
    PrimeNgModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
