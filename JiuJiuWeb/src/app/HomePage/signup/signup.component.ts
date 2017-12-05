import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidator, equalValidator} from "../../validators/validators";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  formModel: FormGroup;
  constructor(public router: Router,fb: FormBuilder) {
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
    let isValid: boolean = this.formModel.get("username").valid;
    console.log(isValid);
    let errors: any = this.formModel.get("username").errors;
    console.log(JSON.stringify(errors));
    console.log(this.formModel.value);
  }
  ngOnInit() {
  }

}
