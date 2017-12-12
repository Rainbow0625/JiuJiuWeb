import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Auth, BackNewsCode, User} from "../HomePage/login/Auth";

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  public loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.findUserBySSM(username,password)
      .then(user => {
        let auth = new Auth();
        localStorage.removeItem('userId');  // 移除掉上一个用户
        // 存储用户要访问的url
        let redirectUrl = (localStorage.getItem('redirectUrl') === null)?
          '/': localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;
        // 判断错误
        if (null === user) {
          auth.hasError = true;
          auth.errMsg = '用户不存在';
        } else if (password === user.password) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId',user.id);
        } else {
          auth.hasError = true;
          auth.errMsg = '密码不匹配';
        }
        return auth;
  });
  }
  private findUserBySSM(username: string,password:string): Promise<any> {
    const url = `/yang-test/angular/login/${username}/${password}/`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        let status:number = res.status;// SSM框架返回的状态
        if(status === 200) { // 服务端正确执行
          let users= res.json() as User[];
          return (users.length>0)?users[0]:null;
        }
      });
  }
}
