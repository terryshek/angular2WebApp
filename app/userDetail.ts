import { Component, Input} from "@angular/core";
import {DataFormat} from "./interface/data-interface";
@Component({
  selector:"user-detail",
  templateUrl:"./app/template/userDetail.html",
})
export class UserDetail{
  @Input() userProfile:DataFormat;

}
