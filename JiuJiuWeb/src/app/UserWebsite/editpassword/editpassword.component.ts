import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Usermessage, UsermessageService} from "../../shared/usermessage.service";

@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.css']
})
export class EditpasswordComponent implements OnInit {

  constructor(public router: Router,private userservice: UsermessageService) { }
  origin_password='';
  new_password='';
  ngOnInit() {

  }
  onSubmit(formRef:any) {
    const username=localStorage.getItem('username');
    const password=localStorage.getItem('password');
    if(password===formRef.origin_password) {
      const new_password = formRef.new_password;
      const user = new Usermessage(0,username,new_password,'', '','','','');
      console.log(user);
      this.userservice.updateUserpassword(user).subscribe(
        a => {
          console.log(a.flag);
          if(a.flag===0) {
            alert("修改失败");
          } else if(a.flag===1) {
            alert("修改成功");
            this.router.navigate(['usercenter']);
          }
        });
    } else {
      alert("密码与原密码不匹配！");
    }
}

}
