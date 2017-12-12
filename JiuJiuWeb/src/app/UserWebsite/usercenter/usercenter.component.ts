import {Component, Input, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {HttpRequestService} from "../../shared/httpRequest.service";
import {Usermessage, UsermessageService} from "../../shared/usermessage.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.css']
})
export class UsercenterComponent implements OnInit {
  file: Array<Object>;
  constructor(private router:Router,private httprequestservice:HttpRequestService,private location:Location,private userservice: UsermessageService) {
    this.file = [];
  }
  @Input() user: Usermessage;
  ngOnInit() {
  }
  imageUploaded(event) {
    console.log(event);
    this.file.push(event.file);
    console.log(this.file);
  }
  imageRemoved(event) {
    console.log(event);
    const index = this.file.indexOf(event.file);
    if( index > -1) {
      this.file.splice(index, 1);
    }
    console.log(this.file);
  }
  save(formValue:any):void {
    const user = new Usermessage(0,formValue.username,formValue.password,formValue.gender,
      formValue.native_place,formValue.birth,formValue.email,null);
    this.userservice.updatesermessage(user).subscribe(
      a => {
        console.log(a);
      }
    );
  }

}
