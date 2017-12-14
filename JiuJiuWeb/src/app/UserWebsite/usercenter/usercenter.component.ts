import {Component, Input, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {HttpRequestService} from "../../shared/httpRequest.service";
import {Usermessage, UsermessageService} from "../../shared/usermessage.service";
import {Location } from '@angular/common';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.css']
})
export class UsercenterComponent implements OnInit {

  constructor(private router:Router,private httprequestservice:HttpRequestService,private location:Location,
                private userservice: UsermessageService) {
  }
  male:boolean;
  female:boolean;
  user:Usermessage ;
  ngOnInit() {
    this.user= new Usermessage(0,'','','','','','','');
    this.user.username=localStorage.getItem('username');
    this.userservice.getUsermes(this.user).subscribe(
      data=> {
         this.user=data;
         console.log(this.user);
         if(this.user.gender==="male") {
           this.male=true;
           this.female=false;
         } else {
           this.female=true;
           this.male=false;
         }
      }
    );
  }
  onSubmit(formValue:any):void {
    let gender='';
    if(this.male===true) {
      gender="male";
    } else {
      gender="female";
    }
    console.log(this.user.user_id);
    const users = new Usermessage(this.user.user_id,formValue.username,formValue.password,gender,
      formValue.native_place,formValue.birth,formValue.email,'');
     console.log(users);
      this.httprequestservice.editUser(users).subscribe(
      a => {
        if(a.flag===0) {
          alert("修改失败");
        } else {
          alert("修改成功");
          this.router.navigate(['user']);
        }
      }
    );
  }

}
