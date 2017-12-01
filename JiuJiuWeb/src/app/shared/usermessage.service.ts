import { Injectable } from '@angular/core';

@Injectable()
export class UsermessageService {
 private users: usermessage[]=[
   new usermessage(),
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
