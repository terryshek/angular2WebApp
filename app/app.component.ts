import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AppService} from "./service/app.service";
import {DataFormat} from "./interface/data-interface";
import {Adder} from "./pipe/dataPipe";
import {UserDetail} from "./userDetail";
import {ModalDemoComponent} from "./modal/modal.component";
import {Observable} from 'rxjs/Rx';



// import {ModalDemoComponent} from "./modal/modal.component";

@Component({
  selector: 'main-component',
  templateUrl: './app/template/home.html',
  pipes:[Adder],
  directives:[UserDetail, ModalDemoComponent],
})
export class AppComponent implements OnInit{
  public foods :any;
  date: Date = new Date();
  public passingUser:DataFormat = {username:"terry", age:27};
  public userList:DataFormat[];
  public title:string;

constructor(public  appService:AppService, private http: Http) {
      console.log(ModalDemoComponent)
      this.title = appService.titile;
  }

  ngOnInit():any{
      this.getUser();
      this.getFoods();

  }
  getFoods() {
    this.http.get('./app/data/food.json')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.foods = data},
        err => console.error(err),
        () => {
          console.log('done')
        }
      );
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
