import {bootstrap}    from '@angular/platform-browser-dynamic';
import{HTTP_PROVIDERS} from'@angular/http'
import {RouteComponent} from './route.component';
import 'rxjs/add/operator/map';
import {BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import {provide} from '@angular/core';
import {appInjector} from './app-injector';
import 'rxjs/Rx';

bootstrap(RouteComponent,[ HTTP_PROVIDERS, BS_VIEW_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}) ]).then((appRef: ComponentRef) => {
  // store a reference to the application injector
  appInjector(appRef.injector);
});;
