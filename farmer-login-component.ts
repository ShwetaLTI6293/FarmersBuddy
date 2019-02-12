import { FarmerLogin } from './farmer-login';
import { Component } from '@angular/core';
import { FarmerLoginService } from './farmer-login-service';
@Component({
selector :'farmerlogin',
templateUrl:'./farmer-login-component.html',
//styleUrls: ['../css/mdb.min.css', '../css/bootstrap.min.css']
})

export class FarmerLoginComponent{
    farmerlogin: FarmerLogin = new FarmerLogin();
    response: string;
    constructor(private ms: FarmerLoginService){

    }
   add(mform){
        this.ms.sendToServer(this.farmerlogin).subscribe(
            data => {
                //Take the response from server and storing in string variable
                this.response = data['status'];
            }
        );
    }
    
    

   

}