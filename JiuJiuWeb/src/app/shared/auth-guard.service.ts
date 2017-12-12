import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;  // 取得用户访问的url
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    // 如果用户已经登录就放行
     if(localStorage.getItem('username')!=null) {
      return true;
    }
    // 否则存储要访问的url到本地
    localStorage.setItem('redirectUrl',url);
     // 然后导航到登录界面
    this.router.navigate(['/login']);
    // 返回false，取消导航
    return false;
  }
}
