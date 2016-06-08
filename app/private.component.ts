import {Component, OnInit} from '@angular/core';
//import {AuthenticationService} from './serivice/';

@Component({
  selector: 'login-form',
  template: `
    <div class="container" style="padding-top: 80px">
      <div class="login-screen">
        <h2>Login</h2>
        <hr>
        <div class="input-group name">
            <span class="input-group-addon" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        </div>
         <div class="input-group pass">
           <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-link"></i></span>
            <input type="PASSWORD" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    	`,
  styleUrls: ["./app/css/login.css"]
})

export class LoginComponent implements OnInit {
  ngOnInit():any {
    console.log("PrivateComponent")
  }

  //constructor(private _service:AuthenticationService){}


}
