import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SearchAppRoutingModule } from './search-routing.module';
import { SearchAppComponent } from './search.component';

@NgModule({
  declarations: [
    SearchAppComponent
  ],
  imports: [
    BrowserModule,
    SearchAppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SearchAppComponent]
})
export class SearchAppModule { }
