import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BidderComponent } from 'src/bidder-component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BidderService } from 'src/bidder-service';

@NgModule({
  declarations: [
    AppComponent,
    BidderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BidderService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
