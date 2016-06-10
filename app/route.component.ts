import { RouteConfig, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashbroad.component';
import { LoginComponent } from './login.component';
// service
import {AppService} from "./service/app.service"
import {AuthService} from './service/loginService';
import { CollapseDirective} from "ng2-bootstrap/ng2-bootstrap";
import { Cookie } from 'ng2-cookies/ng2-cookies';




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
    public myCookie = Cookie.get('loginRecord');

    constructor(public _router:Router, private _authService:AuthService){
      this._router.subscribe((val) => {
        this.isCollapsed = false;
        console.log(JSON.parse(this.myCookie))
      })
    }

    ngOnInit(): any {
        console.log(this._router)
      console.log(JSON.parse(this.myCookie))
    }

    isActive(instruction: any[]): boolean {
      return this._router.isRouteActive(this._router.generate(instruction));
    }
}
