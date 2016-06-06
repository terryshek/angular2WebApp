import {Component, OnInit} from '@angular/core';
import {AppService} from "./service/app.service";
import {DataFormat} from "./interface/data-interface";
import {Adder} from "./pipe/dataPipe";
import {UserDetail} from "./userDetail";
import {AlertComponent, DATEPICKER_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
// import {ModalDemoComponent} from "./modal/modal.component";

@Component({
  selector: 'main-component',
  templateUrl: './app/template/home.html',
  pipes:[Adder],
  directives:[UserDetail, AlertComponent, DATEPICKER_DIRECTIVES]
})
export class AppComponent implements OnInit{
  date: Date = new Date();
  public passingUser:DataFormat = {username:"terry", age:27};
  public userList:DataFormat[];
  ngOnInit():any{
      this.getUser()
  }

  public title:string;
  constructor(public  appService:AppService) {
      console.log(appService)
      this.title = appService.titile;
  }
  getUser(){
    this.appService.getUsers().then((res)=>{
      console.log(res)
      this.userList = res
    })
  }
  directRoute(postName:DataFormat){
    console.log(postName)
    this.passingUser = postName
  }

}
