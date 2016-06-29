import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
  // `
  //   <h1>Component Router</h1>
  //   <nav>
  //     <a [routerLink]="['/crisis-center']">Crisis Center</a>
  //     <a [routerLink]="['/heroes']">Heroes</a>
  //     <a [routerLink]="['/login']">Login</a>
  //   </nav>
  //   <router-outlet></router-outlet>
  // `,
  ,
  directives: [ROUTER_DIRECTIVES, LoginComponent]
})
export class AppComponent { }