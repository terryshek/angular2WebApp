import {Component, OnInit, Inject} from '@angular/core';
import {AppService} from "./service/app.service";
import {DataFormat} from "./interface/data-interface";
import {Adder} from "./pipe/dataPipe";
import {UserDetail} from "./userDetail";
import {ModalDemoComponent} from "./modal/modal.component";
import {Observable} from 'rxjs/Rx';
import {RouteParams, RouteData} from '@angular/router-deprecated';
import { BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

interface food{
  name:string;
}

// import {ModalDemoComponent} from "./modal/modal.component";

@Component({
  selector: 'main-component',
  templateUrl: './app/template/home.html',
  pipes:[Adder],
  directives:[UserDetail, ModalDemoComponent],
  viewProviders:[BS_VIEW_PROVIDERS]
})

export class AppComponent implements OnInit{
  public foods :food[];
  date: Date = new Date();
  public passingUser:DataFormat;
  public userList:DataFormat[];
  public title:string;
  public id:number;

  constructor(public  appService:AppService, private _params: RouteParams, public data: RouteData) {
      this.title = appService.titile;
      console.log(this._params.get("id"))
     this.passingUser = data.get('defaultData');
  }

  ngOnInit():any{
      this.getUser();
      this.getFoods();
      console.log(this.passingUser)

  }
  getFoods() {
    this.appService.getFood().subscribe(
    // the first argument is a function which runs on success
      data => {
        console.log(data)
        this.foods = data
      },
      // the second argument is a function which runs on error
        err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
  );
  }


  getUser(){
    this.appService.getUsers().subscribe(
      // the first argument is a function which runs on success
        data => {
        console.log(data)
        this.userList = data
      },
      // the second argument is a function which runs on error
        err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
}
