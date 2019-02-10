import { Bidder } from './bidder';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BidderComponent } from './bidder-component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class BidderService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	sendToServer(bidder: Bidder){
        //Send data to server in JSON form
        let url = "http://localhost:8030/bidder/add";
        return this.http.post(url, bidder);
	}

}