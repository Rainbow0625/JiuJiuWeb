import {CanActivate} from "@angular/router";

export class AdminGuardService implements CanActivate{
  canActivate() {
    let isAdmin:boolean;
    if(localStorage.getItem('admin') === '1' ) {
      isAdmin = true;
    }else {
      isAdmin =false;
    }
    console.log("用户不能进入管理员系统！");
    return isAdmin;
  }
}
