import { Bidder } from './bidder';
import { Component } from '@angular/core';
import { BidderService } from './bidder-service';
@Component({
selector :'add-bidder',
templateUrl:'./bidder-component.html',
//styleUrls: ['../css/mdb.min.css', '../css/bootstrap.min.css']
})

export class BidderComponent{
    bidder: Bidder = new Bidder();
    response: string;
    constructor(private ms: BidderService){

    }
   add(mform){
        this.ms.sendToServer(this.bidder).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    } 

   

}