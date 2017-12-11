import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Admin} from "./admin.service";
import {Observable} from "rxjs/Observable";
import {Article} from "./article.service";
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {of} from "rxjs/observable/of";
import {Usermessage} from "./usermessage.service";


@Injectable()
export class HttpRequestService {

  constructor(private http: HttpClient,private https:Http) { }

  loadAdmins():Observable<Admin[]> {
    return this.http.get<Admin[]>('/test/test');
  }

  addAdmin(admin:Admin):Observable<Admin> {
    // const testa = JSON.parse(admin.toString());
    // console.log(testa);
    return this.http.post<Admin>(
      'http://localhost:80/thinkphp/public/index.php/index/index', admin,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
        withCredentials:true
      });
  }

  addArticle(article:Article):Observable<Article> {
    return this.http.post<Article>(
      '.....', JSON.stringify(article),
      {
        headers: new HttpHeaders().set('ArticleClass', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
      });
  }
  updateUser(user:Usermessage):Observable<any> {
    return this.http.put(url,user,
      {
        headers: new HttpHeaders({'Content-Type':'application/json'}),
        withCredentials:true
      });
  }
  /*searchArticle(term:string):Observable<Article[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.https.get(`URL?name=${term}`)
      .map(response => response.json().data as Article[]);
  }*/
  searchArticle(term: string): Observable<Article[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Article[]>(`api/heroes/?name=${term}`);
  }
}
