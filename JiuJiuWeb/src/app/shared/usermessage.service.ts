import { Injectable } from '@angular/core';
import {HttpRequestService} from "./httpRequest.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UsermessageService {

  /*
 private users: Usermessage[]=[
   new Usermessage(1,"Summer","1234","male","香港","1994-08-09","37737@qq.com",new Array<Object>()),
 ];
 */

  constructor(private httpService:HttpRequestService) {}
  getUsermessage(): Observable<Usermessage[]> {
   return this.httpService.loadUser();
  }
  addUsermessage(user:Usermessage):Observable<any> {
    return this.httpService.addUser(user);
  }
  updatesermessage(user:Usermessage):Observable<any> {
    return this.httpService.updateUser(user);
  }
  deleteUsermessage(user:Usermessage):Observable<any> {
    return this.httpService.deleteUser(user);
  }
  updateUserpassword(user: Usermessage):Observable<any> {
    return this.httpService.updateUserpw(user);
  }
  getUsermes(user:Usermessage): Observable<Usermessage> {
    return this.httpService.getUser(user);
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
    public head_pic:string,
  ) {
  }


}
