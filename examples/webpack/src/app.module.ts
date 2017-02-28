import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { HolderJsModule } from 'angular2-holderjs/component';

@NgModule({
  imports:      [ BrowserModule, HolderJsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }