import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidator, equalValidator} from "../../validators/validators";
import {Usermessage, UsermessageService} from "../../shared/usermessage.service";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formModel: FormGroup;
  constructor(public router: Router,fb: FormBuilder,private userService:UsermessageService) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', emailValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }
  onSubmit() {
    console.log(this.formModel.get('username').value);
    console.log(this.formModel.get(['passwordsGroup','password']).value);
    console.log(this.formModel.get('email').value);
    const user = new Usermessage(0,this.formModel.get('username').value,this.formModel.get(['passwordsGroup','password']).value,
      '','','',this.formModel.get('email').value,'');
    this.userService.addUsermessage(user).subscribe(
      data => {
        console.log(data.flag);
        if(data.flag===0) {
          alert("添加用戶失敗！");
        }else {
          this.router.navigate(['/usercenter']);
        }
        localStorage.setItem('username',this.formModel.get('username').value);
      }
    );
    /*let isValid: boolean = this.formModel.get("username").valid;
    console.log(isValid);
    let errors: any = this.formModel.get("username").errors;
    console.log(JSON.stringify(errors));
    console.log(this.formModel.value);*/

  }
  ngOnInit() {
  }

}
