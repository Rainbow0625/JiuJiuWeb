import { Injectable } from '@angular/core';

@Injectable()
export class UsermessageService {
 private users: Usermessage[]=[
   new Usermessage(1,"Summer","1234","male","香港","1994-08-09","37737@qq.com",new Array<Object>()),
 ];
  constructor() {}
  getUsermessage(): Usermessage[] {
   return this.users;
  }
}
export class Usermessage {
  constructor(
    public user_id: number,
    public username: string,
    public password: string,
    public gender: string,
    public native_place: string,
    public birth: string,
    public email: string,
    public head_pic:Array<Object>,
  ) {
  }


}
