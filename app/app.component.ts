import {Component, OnInit, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AppService} from "./service/app.service";
import {DataFormat} from "./interface/data-interface";
import {Adder} from "./pipe/dataPipe";
import {UserDetail} from "./userDetail";
import {ModalDemoComponent} from "./modal/modal.component";
import {Observable} from 'rxjs/Rx';

interface food{
  name:string;
}

// import {ModalDemoComponent} from "./modal/modal.component";

@Component({
  selector: 'main-component',
  templateUrl: './app/template/home.html',
  pipes:[Adder],
  directives:[UserDetail, ModalDemoComponent],
})
export class AppComponent implements OnInit{
  public foods :food[];
  date: Date = new Date();
  public passingUser:DataFormat = {username:"terry", age:27};
  public userList:DataFormat[];
  public title:string;

constructor(public  appService:AppService, private http: Http) {
      console.log(name);
      this.title = appService.titile;
  }

  ngOnInit():any{
      this.getUser();
      this.getFoods();

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
  directRoute(postName:DataFormat){
    console.log(postName)
    this.passingUser = postName
  }

}
