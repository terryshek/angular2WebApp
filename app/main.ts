import {bootstrap}    from '@angular/platform-browser-dynamic';
import{HTTP_PROVIDERS} from'@angular/http'
import {RouteComponent} from './route.component';
import 'rxjs/add/operator/map';
import {BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import { ROUTER_PROVIDERS} from '@angular/router-deprecated';


bootstrap(RouteComponent,[ HTTP_PROVIDERS, BS_VIEW_PROVIDERS, ROUTER_PROVIDERS ]);
