import { RouteConfig, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashbroad.component';
// service
import {AppService} from "./service/app.service"


@Component({
    selector: 'my-app',
    templateUrl: './app/template/nav.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AppService
    ]
})
@RouteConfig([
    {
        path: '/main',
        name: 'Main',
        component: AppComponent,
        useAsDefault:true
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    }

])


export class RouteComponent implements OnInit {
    title = 'ng2 blog';

    constructor(public _router:Router){

    }

    ngOnInit(): any {
        console.log(this._router)
    }

    isActive(instruction: any[]): boolean {
      return this._router.isRouteActive(this._router.generate(instruction));
    }
}
