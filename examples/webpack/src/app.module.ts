import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { HolderJsComponent } from 'angular2-holderjs/component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HolderJsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }