import { FarmerLogin } from './farmer-login';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FarmerLoginComponent } from './farmer-login-component';
import { Observable } from 'rxjs';

@Injectable() //Dependency Injection
export class FarmerLoginService{
    //This class will talk to server

    constructor(private http:HttpClient)
    {
            
    }
	 sendToServer(farmerlogin: FarmerLogin){
        //Send data to server in JSON form
        let url = "http://localhost:8150/farmerlogin/verifyFarmer";
        return this.http.post(url, farmerlogin);
    } 
    

}