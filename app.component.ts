import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
  

  <ul class="nav navbar-nav">
  <li><a [routerLink]="['/farmerlogin']">FARMER LOGIN</a></li>
  <li><a [routerLink]="['/login']">BIDDER LOGIN</a></li>
  <li><a [routerLink]="['/add-farmer']">FARMER REGISTRATION</a></li>
  <li><a [routerLink]="['/add-bidder']">BIDDER REGISTRATION</a></li>
  </ul>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
}
