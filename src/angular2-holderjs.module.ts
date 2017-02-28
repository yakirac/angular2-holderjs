import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { HttpModule } 	       from '@angular/http';

import { HolderJsComponent }   from './holderjs.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [ HolderJsComponent ],
  exports: [ HolderJsComponent ]
})

export class HolderJsModule { }