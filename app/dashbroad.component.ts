import { Component } from '@angular/core';
import {isLoggedIn} from './is-logged-in';
import {Router, CanActivate, CanDeactivate} from '@angular/router-deprecated';
@Component({
  selector: 'my-dashboard',
  templateUrl: './app/template/dashbroad.html'
})
@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
  let result = isLoggedIn(next, previous)
  console.log(result)
  return result;
})
export class DashboardComponent {
}
