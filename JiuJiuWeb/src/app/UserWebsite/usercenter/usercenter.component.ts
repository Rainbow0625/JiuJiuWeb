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
  // @Input()
  male:boolean;
  // @Input()
  female:boolean;
  userdisplay:Usermessage ;
 @Input() user:Usermessage =  new Usermessage(0,'','','','','','',''); // null
  constructor(private router:Router,private httprequestservice:HttpRequestService,private location:Location,
                private userservice: UsermessageService) {
  }

  ngOnInit():void {
     this.getuser();
  }
  getuser():void {
    this.userdisplay = new Usermessage(0, '', '', '', '', '', '', '');
    this.userdisplay.username = localStorage.getItem('username');
    this.userservice.getUsermes(this.userdisplay).do(data => this.user = data['0']).subscribe(
      () => {
        // this.user=data;
        console.log(this.user);
      } );
  }

  onSubmit(formValue:any):void {
    let gender='';
    if(this.male===true) {
      gender="male";
    } else {
      gender="female";
    }
    console.log(this.user.user_id);
     let users = new Usermessage(this.user.user_id,formValue.username,formValue.password,gender,
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
