import { RouteConfig, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Component, OnInit} from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashbroad.component';

@Component({
    selector: 'my-app',
    template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">{{title}}</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li [class.active]="isActive(['Main'])"><a [routerLink]="['Main']">Main</a></li>
            <li [class.active]="isActive(['Dashboard'])"><a [routerLink]="['Dashboard']">Dashboard</a></li>                      
          </ul>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
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
