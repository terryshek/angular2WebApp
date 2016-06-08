import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';


@Injectable()
export class AuthService {
  isLoggedin: boolean;

  constructor(private _http:Http) {

  }

  loginfn(usercreds) {
    this.isLoggedin = false;
    var headers = new Headers();
    var creds = 'username=' + usercreds.username + '&password=' + usercreds.password;

    headers.append('Content-Type', 'application/json');

    return new Promise((resolve) => {

      this._http.post('http://103.44.162.106:8337/login?', creds, {headers: headers}).subscribe((data) => {
          if(data.json().success) {
            console.log(data.json())
            window.localStorage.setItem('auth_key', data.json().token);
            this.isLoggedin = true;}
          resolve(this.isLoggedin)
        }
      )

    })
  }


}
