import { Injectable } from '@angular/core';

@Injectable()
export class UsermessageService {
 private users: usermessage[]=[
   new usermessage(1,"sjsj","male","san","1994-08-09","123456","37737@qq.com"),
 ]
  constructor() { }
  getUsermessage(): usermessage[] {
   return this.users;
  }



}
export class usermessage {
  constructor(
    public id: number,
    public name: string,
    public sex: string,
    public place: string,
    public birthday: string,
    public password: string,
    public email: string
  ){

  }


}
