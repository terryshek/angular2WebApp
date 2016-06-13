import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class AuthService {
  private loggedIn = false;

  constructor(private _http: Http) {
    this.loggedIn = !!Cookie.get('loginRecord');
  }

  loginfn(usercreds:any){
    var headers = new Headers();
    var creds = JSON.stringify({username:usercreds.username, password:usercreds.password});

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    return new Promise((resolve) => {
      this._http.post('http://103.44.162.106:8337/login', creds, {headers: headers})
        .map(res => res.json())
        .subscribe((res) => {
          console.log(res)
          if(res.status == 200) {
            console.log(res)
            this.loggedIn =true;
            Cookie.set('loginRecord', JSON.stringify({'loginIn':true,'this_id': res.this_profile["_id"]}), 10 /*days from now*/);
          }
          resolve(res.status)
        },
        error => console.log(error)
      )

    })
  }
  logout() {
    console.log("Logout")
    Cookie.delete('loginRecord');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  check() {
    return Observable.of(this.loggedIn);
  }


}
