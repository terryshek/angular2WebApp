import {Injector} from '@angular/core';
import {appInjector} from './app-injector';
import {AuthService as Auth} from './service/loginService';
import {Router, ComponentInstruction} from '@angular/router-deprecated';
import { Cookie } from 'ng2-cookies/ng2-cookies';

export const isLoggedIn = (next: ComponentInstruction, previous: ComponentInstruction) => {
  let injector: Injector = appInjector(); // get the stored reference to the injector
  let auth: Auth = injector.get(Auth);
  let router: Router = injector.get(Router);
  let myCookie = JSON.parse(Cookie.get('loginRecord'));

  console.log(myCookie)

  // return a boolean or a promise that resolves a boolean
  return new Promise((resolve) => {
    if(myCookie != null){
      if (myCookie.loginIn) {
        resolve(true);
      } else {
        router.navigate(['/Login']);
        resolve(false);
      }
    }else{
        router.navigate(['/Login']);
        resolve(false);
    }

  });
};
