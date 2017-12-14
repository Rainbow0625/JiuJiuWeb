import {CanActivate} from "@angular/router";

export class AdminGuardService implements CanActivate{
  canActivate() {
    let isAdmin:boolean;
    if(localStorage.getItem('admin') === '1' ) {
      isAdmin = true;
      console.log("路由守卫：管理员可以进入管理员系统！");
    }else {
      isAdmin =false;
      console.log("路由守卫：用户不能进入管理员系统！");
    }
    return isAdmin;
  }
}
