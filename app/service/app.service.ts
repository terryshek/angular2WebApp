import { Injectable} from "@angular/core";
import { userList} from "../source/mock-data";
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AppService{
  public  titile = "My First Angular 2 App" ;

  constructor(public http:Http){

  }

  getUsers() {
    return this.http.get('./app/data/users.json').map((res:Response) => res.json());

  }

  getFood(){
    return this.http.get('./app/data/food.json').map((res:Response) => res.json());
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
interface food{
  name:string;
}
