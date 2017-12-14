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
  male:boolean;
  female:boolean;
  userdisplay:Usermessage ;
 @Input()user:Usermessage = new Usermessage(0,'','','','','','','');
  constructor(private router:Router,private httprequestservice:HttpRequestService,private location:Location,
                private userservice: UsermessageService) {
  }

  ngOnInit():void {
     this.getuser();
  }
  getuser():void {
    this.userdisplay= new Usermessage(0,'','','','','','','');
    this.userdisplay.username=localStorage.getItem('username');
    this.userservice.getUsermes(this.userdisplay).subscribe(
      data=> {
        this.user=data;
        console.log(data);
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
  /*
  onSubmit():void {
    let gender='';
    if(this.male===true) {
      gender="male";
    } else {
      gender="female";
    }
    console.log(this.user.user_id);
    // const users = new Usermessage(this.user.user_id,formValue.username,formValue.password,gender,
    //  formValue.native_place,formValue.birth,formValue.email,'');
     console.log(this.user);
      this.httprequestservice.editUser(this.user).subscribe(
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
  */

}
