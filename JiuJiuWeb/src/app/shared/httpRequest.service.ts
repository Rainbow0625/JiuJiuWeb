import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Admin} from "./admin.service";
import {Observable} from "rxjs/Observable";
import {Article} from "./article.service";
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {Cate} from "./cate.service";
import {Usermessage} from "./usermessage.service";

@Injectable()
export class HttpRequestService {

  constructor(private http: HttpClient,private https:Http) { }

  /*ADMIN */
  loadAdmins():Observable<Admin[]> {
    return this.http.get<Admin[]>('......');
  }
  addAdmin(admin:Admin):Observable<any> {
    return this.http.post<Admin>(
      'http://localhost:80/thinkphp/public/index.php/index/index', admin,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
        withCredentials:true
      }
      );
  }
  updateAdmin(admin:Admin):Observable<any> {
    return this.http.post<Admin>(
      'http://localhost:80/.......', admin,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }
  deleteAdmin(admin:Admin):Observable<any> {
    return this.http.post<Admin>(
      'http://localhost:80/.......', admin,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }

  /*ARTICLE */
  loadArticle():Observable<Article[]> {
    return this.http.get<Article[]>('......');
  }
  updateArticle(article:Article): Observable<any> {
    return this.http.post('.....', article,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      });
  }
  deleteArticle(article:Article): Observable<any> {
    return this.http.post('.....', article,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      });
  }
  addArticle(article:Article):Observable<any> {
    return this.http.post(
      '.....', article,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      });
  }
  searchArticle(term:string):Observable<Article[]> {
    return this.https.get(`api/articles/?keyword=${term}`)
      .map(response => response.json().data as Article[]);
  }


  /*CATE*/
  loadCate():Observable<Cate[]> {
    return this.http.get<Cate[]>('......');
  }
  addCate(cate:Cate):Observable<any> {
    return this.http.post<Cate>(
      'http://localhost:80/thinkphp/public/index.php/index/index', cate,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
        withCredentials:true
      }
    );
  }
  updateCate(cate:Cate):Observable<any> {
    return this.http.post<Cate>(
      'http://localhost:80/.......', cate,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }
  deleteCate(cate:Cate):Observable<any> {
    return this.http.post<Cate>(
      'http://localhost:80/.......', cate,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }

  /*USER*/
  loadUser():Observable<Usermessage[]> {
    return this.http.get<Usermessage[]>('......');
  }
  addUser(user:Usermessage):Observable<any> {
    return this.http.post<Usermessage>(
      'http://localhost:80/thinkphp/public/index.php/index/index', user,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
        withCredentials:true
      }
    );
  }
  updateUser(user:Usermessage):Observable<any> {
    return this.http.post<Usermessage>(
      'http://localhost:80/.......', user,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }
  deleteUser(user:Usermessage):Observable<any> {
    return this.http.post<Usermessage>(
      'http://localhost:80/.......', user,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }
}
