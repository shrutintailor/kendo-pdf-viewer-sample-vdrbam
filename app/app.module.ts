import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import 'hammerjs';

import { AppComponent } from './app.component';
import '@progress/kendo-ui';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IntlModule,
    DateInputsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
