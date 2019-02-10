import {Component} from '@angular/core'

export class Bidder{

    constructor(
        public fullName?:string,
        public contactNo?:number,
        public emailId?:string,
        public address?:string,
        public city?:string,
        public state?:string,
        public pincode?:number,
        public accountNo?:number,
        public ifscCode?:string,
        public aadhar?:string,
        public pan?:string,
        public traderLicense?:string,
        public password?:string,
        public confirmPassword?:string

         ){

         }
}