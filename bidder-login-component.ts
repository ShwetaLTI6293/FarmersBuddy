import { BidderLogin } from './bidder-login';
import { Component } from '@angular/core';
import { BidderLoginService } from './bidder-login-service';
@Component({
selector :'login',
templateUrl:'./bidder-login-component.html',
//styleUrls: ['../css/mdb.min.css', '../css/bootstrap.min.css']
})

export class BidderLoginComponent{
    login: BidderLogin = new BidderLogin();
    response: string;
    constructor(private ms: BidderLoginService){

    }
   add(mform){
        this.ms.sendToServer(this.login).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }
    
    

   

}