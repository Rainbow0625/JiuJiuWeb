import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {HttpRequestService} from "./httpRequest.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AdminService {

  private admins:Admin[]=[
    new Admin (1,"小峰",""),
    new Admin (2,"小卿",""),
  ];


  // private admins:Admin[];
  constructor(private httpService: HttpRequestService) { }

  getData():Admin[] {
    /*
    this.httpService.loadAdmins().subscribe(
      data => {
        this.admins = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An ADD-USER error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
    */
    return this.admins;
  }

  addAdmin(admin:Admin):Observable<Admin> {
    return this.httpService.addAdmin(admin);
  }
}

export class Admin {
  constructor(
    public id: number,
    public username: string,
    public password:string,
  ) {}
}
