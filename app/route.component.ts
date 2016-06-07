import { RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashbroad.component';
// service
import {AppService} from "./service/app.service"
import { CollapseDirective} from "ng2-bootstrap/ng2-bootstrap"



@Component({
    selector: 'my-app',
    templateUrl: './app/template/nav.html',
    directives: [ROUTER_DIRECTIVES, CollapseDirective],
    providers: [
        AppService
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
      useAsDefault: true
  }

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
