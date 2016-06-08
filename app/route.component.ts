import { RouteConfig, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashbroad.component';
import { LoginComponent } from './login.component';
// service
import {AppService} from "./service/app.service"
import {AuthService} from './service/loginService';
import { CollapseDirective} from "ng2-bootstrap/ng2-bootstrap";



@Component({
    selector: 'my-app',
    templateUrl: './app/template/nav.html',
    directives: [ROUTER_DIRECTIVES, CollapseDirective],
    providers: [
      AppService,
      AuthService,
      ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/main/:id',
    name: 'Main',
    component: AppComponent,
    data: {defaultData: {username:"terry", age:27}}
  },
  {
    path: '/main',
    name: 'Main',
    component: AppComponent,
    data: {defaultData: {username:"terry", age:27}}
  },
  {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardComponent,
  },
  {
      path: '/login',
      name: 'Login',
      component: LoginComponent,
      useAsDefault: true
  },
  {
    path: '/*path',
    redirectTo: ['Login']}

])


export class RouteComponent implements OnInit {
    title = 'ng2 blog';
    private name:string;
    public isCollapsed:boolean = false;

    constructor(public _router:Router){
      this._router.subscribe((val) => {
        this.isCollapsed = false;
      })
    }

    ngOnInit(): any {
        console.log(this._router)
    }

    isActive(instruction: any[]): boolean {
      return this._router.isRouteActive(this._router.generate(instruction));
    }
}
