import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Auth, User} from "../HomePage/login/Auth";
import {Usermessage} from "./usermessage.service";

@Injectable()
export class AuthService {

  constructor(private http: Http) { }
  public loginWithCredentials(username: string, password: string,checkadmin: string): Promise<Auth> {
    const user = new User();
    user.username = username;
    user.password = password;
    return this.findUserBySSM(user,checkadmin)
      .then(data => {
        const auth = new Auth();
        localStorage.removeItem('userId');  // 移除掉上一个用户
        // 存储用户要访问的url
        const redirectUrl = (localStorage.getItem('redirectUrl') === null)?
          '/': localStorage.getItem('redirectUrl');
        console.log(redirectUrl);
        auth.redirectUrl = redirectUrl;
        // 判断错误
        console.log(data.flag);
        if(data.flag===1) {
          auth.hasError = false;
          localStorage.setItem('username',username);
          localStorage.setItem('password',password);
        } else if(data.flag===2) {
          auth.hasError = true;
          auth.errMsg = '密码不匹配';
        } else {
          auth.hasError = true;
          auth.errMsg = '用户不存在';}
        return auth;
  });
  }
  private findUserBySSM(user:User,checkadmin:string): Promise<any> {
    let url="";
    if(Number(checkadmin)===1) {
      url = `http://localhost:80/project_blog/public/index.php/admin/login/index`;
      localStorage.setItem('admin','1');
    } else {
      url = `http://localhost:80/project_blog/public/index.php/index/login/index`;
      localStorage.setItem('admin','0');
    }
    return this.http.post(url,user,{withCredentials:true})
      .toPromise()
      .then(res => {
        const status:number = res.status;// SSM框架返回的状态
        if(status === 200) { // 服务端正确执行
          console.log(res.toString());
          return res.json();
        }
      })
      ;
  }
}
