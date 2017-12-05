import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

export function emailValidator(control:FormControl): any {
  var myreg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  let valid = myreg.test(control.value);
  console.log("email校验结果："+valid);
  return valid ? null : {email: true};
}



export function equalValidator(group: FormGroup): any {
  let password : FormControl = group.get("password") as FormControl;
  let pconfirm : FormControl = group.get("pconfirm") as FormControl;
  let valid : boolean = (password.value === pconfirm.value);
  console.log("密码校验结果"+ valid);
  return valid ? null : {equal: true};
}
