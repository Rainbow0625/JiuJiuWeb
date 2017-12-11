import {Component, Input, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {HttpRequestService} from "../../shared/httpRequest.service";
import {Usermessage} from "../../shared/usermessage.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.css']
})
export class UsercenterComponent implements OnInit {
  file: Array<Object>;
  constructor(private router:Router,private httprequestservice:HttpRequestService,private location:Location) {
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
    let index = this.file.indexOf(event.file);
    if( index > -1) {
      this.file.splice(index, 1);
    }
    console.log(this.file);
  }
  goBack():void {
    this.location.back();
  }
  save():void {
    this.httprequestservice.updateUser(this.user).subscribe(()=>this.goBack());
  }
}
