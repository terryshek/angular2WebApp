import { Component } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
import { isLoggedIn } from './service/user.service';

@Component({
  selector: 'profile',
  template: `...`
})
@CanActivate(isLoggedIn)
export class ProfileComponent {}
