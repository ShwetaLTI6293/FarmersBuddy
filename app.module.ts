import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BidderComponent } from 'src/bidder-component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BidderService } from 'src/bidder-service';
import { BidderLoginComponent } from 'src/bidder-login-component';
import { BidderLoginService } from 'src/bidder-login-service';
import { FarmerService } from 'FarmerService';
import { FarmerComponent } from 'FarmerComponent';
import { FarmerLoginComponent } from 'src/farmer-login-component';
import { FarmerLoginService } from 'src/farmer-login-service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BidderComponent,
    BidderLoginComponent,
    FarmerComponent,
    FarmerLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( [ 
      { path: 'farmerlogin', component: FarmerLoginComponent},
      { path: 'login', component: BidderLoginComponent},
      { path: 'add-bidder', component: BidderComponent},
      { path: 'add-farmer', component: FarmerComponent}

   ])
  ],
  providers: [BidderService,BidderLoginService,HttpClient,FarmerService,FarmerLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }