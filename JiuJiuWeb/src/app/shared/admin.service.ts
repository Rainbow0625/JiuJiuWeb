import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpRequestService} from "./httpRequest.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AdminService {
  constructor(private httpService: HttpRequestService) { }

  getAdmins():Observable<Admin[]> {
    return this.httpService.loadAdmins();
  }

  addAdmin(admin:Admin):Observable<any> {
    return this.httpService.addAdmin(admin);
  }

  updateAdmin(admin:Admin):Observable<Admin>{
    return this.httpService.updateAdmin(admin);
  }

  deleteAdmin(admin:Admin):Observable<Admin>{
    return this.httpService.deleteAdmin(admin);
  }

}

export class Admin {
  constructor(
    public id: number,
    public username: string,
    public password:string,
  ) {}
}
