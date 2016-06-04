import { Injectable} from "@angular/core";
import { userList} from "../source/mock-data";
@Injectable()
export class AppService{
  public  titile = "My First Angular 2 App" ;
  getUsers() {
    return Promise.resolve(userList);
  }

}
