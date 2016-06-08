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
  selector: 'login-form',
  providers:[AuthService],
  template: `
    <div class="container" style="padding-top: 80px">
      <form [ngFormModel]="form" class="login-screen text-center" novalidate>
        <h2>Login</h2>
        <hr>
        <div class="input-group name">
            <span class="input-group-addon" id="basic-addon1">@</span>
            <input type="text" class="form-control" ngControl="username" placeholder="Username" aria-describedby="basic-addon1" required>
        </div>
        <div *ngIf="username.dirty && !username.valid && !username.pending">
            <p *ngIf="username.errors.required">Username is required.</p>
        </div>
         <div class="input-group pass">
           <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-link"></i></span>
            <input type="PASSWORD" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        </div>
        <hr/>
        <button type="submit" (click)="submitData()" [disabled]="!form.valid"class="btn btn-default">Login</button>
      </form>
    </div>
    	`,
  styleUrls: ["./app/css/login.css"]
})

export class LoginComponent implements OnInit {

  ngOnInit():any {
    console.log("LoginComponent")
  }

  constructor(private _service:AuthService, private _router: Router, private builder: FormBuilder) {

    this.username = new Control(
      "",
      Validators.compose([Validators.required, UsernameValidator.startsWithNumber]),
      UsernameValidator.usernameTaken
    );

    this.form = builder.group({
      username:  this.username
    });
  }

  submitData(){
    console.log(JSON.stringify(this.form.value))
  }

  login() {
    this._service.loginfn(this.localUser).then((res) => {
      if(res)
        this._router.navigate(['Dashboard']);
      else
        console.log(res);
    })
  }

}
