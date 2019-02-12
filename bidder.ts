import {Component} from '@angular/core'

export class Bidder{

    constructor(
        public fullName?:string,
        public contactNo?:string,
        public emailId?:string,
        public address?:string,
        public state?:string,
        public city?:string,
        
        public pincode?:number,
        public accountNo?:string,
        public ifscCode?:string,
        public aadhar?:string,
        public pan?:string,
        public traderLicense?:string,
        public password?:string,
        public confirmPassword?:string

         ){

         }
}