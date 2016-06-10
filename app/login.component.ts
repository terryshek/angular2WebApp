import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {AuthService} from './service/loginService';
import {
  FormBuilder,
  Validators,
  Control,
  ControlGroup,
  FORM_DIRECTIVES
} from '@angular/common';

import { UsernameValidator } from './validation/userValidator'

@Component({
  directives:[FORM_DIRECTIVES],
  selector: 'login-form',
  providers:[AuthService],
  template: `
    <div class="container" style="padding-top: 80px" >
      <form [ngFormModel]="form" class="login-screen text-center" novalidate>
        <h2>Login</h2>
        <hr>
        <div class="input-group name">
            <span class="input-group-addon" id="basic-addon1">@</span>
            <input type="text" class="form-control" ngControl="username" placeholder="Username" aria-describedby="basic-addon1" required>
        </div>
        <div *ngIf="username.dirty && !username.valid && !username.pending" class="alert alert-danger" style="margin: 5px">
            <p *ngIf="username.errors.required"><strong>Username is required.</strong></p>
        </div>
         <div class="input-group pass">
           <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-link"></i></span>
            <input type="PASSWORD" class="form-control" ngControl="password" placeholder="Password" aria-describedby="basic-addon1">
        </div>
        <div *ngIf="password.dirty && !password.valid && !password.pending" class="alert alert-danger" style="margin: 5px">
            <p *ngIf="password.errors.required"><strong>Password is required.</strong></p>
        </div>
        <hr/>
        <button type="submit" (click)="login()" [disabled]="!form.valid" class="btn btn-default">
          <div [hidden]="loggedIn">Login</div>
          <div [hidden]="!loggedIn"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>&nbsp; loading ...</div>
        </button>
      </form>
    </div>
    	`,
  styleUrls: ["./app/css/login.css"]
})

export class LoginComponent implements OnInit {
  public loggedIn :boolean;

  ngOnInit():any {
    console.log("LoginComponent")
    console.log(this.loggedIn)
  }

  constructor(private _service:AuthService, private _router: Router, private builder: FormBuilder) {
    this.loggedIn = _service.isLoggedin
    this.username = new Control('', Validators.required, UsernameValidator.checkIfAvailable);
    this.password = new Control('', Validators.required);

    this.form = builder.group({
      username:  this.username,
      password:  this.password
    });
  }

  submitData(){
    console.log(JSON.stringify(this.form.value))
  }

  login() {
    this.loggedIn = true;
    this._service.loginfn(this.form.value).then((res) => {
      if(res)
        this._router.navigate(['Dashboard']);
      else
        console.log(res);

      this.loggedIn = false;
    })
  }

}
