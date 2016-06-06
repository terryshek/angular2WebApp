/**
 * Created by terryshek on 4/6/2016.
 */
import {Pipe} from "@angular/core";
@Pipe({
  name:"adder"
})
export class Adder {
  transform(value:number){
    return value +1
  }
}
