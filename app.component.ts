import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  /* Change the link color to #111 (black) on hover */
  li a:hover {
    background-color: #111;
  }

  h1 {

    width: 200px;
    
    height: 100px;
    
    background: url('logo.png');
    
    text-indent: -9999px;
    
    }

    .bg {
      /* The image used */
      background-image: url("img_girl.jpg");
    
      /* Full height */
      height: 100%; 
    
      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  </style>
  <h1></h1>
  <ul class="nav navbar-nav">
  <li><a [routerLink]="['/farmerlogin']">HOME</a></li>
  <li><a [routerLink]="['/farmerlogin']">ABOUT US</a></li>
  <li><a [routerLink]="['/farmerlogin']">CONTACT US</a></li>
  <li><a [routerLink]="['/farmerlogin']">FARMER LOGIN</a></li>
  <li><a [routerLink]="['/login']">BIDDER LOGIN</a></li>

  <li><a [routerLink]="['/add-bidder']">BIDDER REGISTRATION</a></li>
  </ul>
  <div class="bg"></div>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
