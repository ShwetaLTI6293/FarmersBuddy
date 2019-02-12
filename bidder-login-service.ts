import { BidderLogin } from './bidder-login';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BidderLoginComponent } from './bidder-login-component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class BidderLoginService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	 sendToServer(login: BidderLogin){
        //Send data to server in JSON form
        let url = "http://localhost:8150/bidderlogin/verifybidder";
        return this.http.post(url, login);
    } 
    

}