import {Component, OnInit} from '@angular/core';
import {AppService} from "./service/app.service";
import {DataFormat} from "./interface/data-interface";
import {Adder} from "./pipe/dataPipe";

@Component({
  selector: 'main-component',
  templateUrl: './app/template/home.html',
  pipes:[Adder]
})
export class AppComponent implements OnInit{
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

}
