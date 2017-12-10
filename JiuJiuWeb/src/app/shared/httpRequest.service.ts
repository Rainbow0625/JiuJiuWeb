import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Admin} from "./admin.service";
import {Observable} from "rxjs/Observable";
import {Article} from "./article.service";
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";

@Injectable()
export class HttpRequestService {

  constructor(private http: HttpClient,private https:Http) { }

  loadAdmins():Observable<Admin[]> {
    return this.http.get<Admin[]>('/test/test');
  }

  addAdmin(admin:Admin):Observable<Admin> {
    return this.http.post<Admin>(
      'http://localhost:8000/test/test', JSON.stringify(admin),
      {
        headers: new HttpHeaders().set('AdminClass', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
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
  searchArticle(term:string):Observable<Article[]> {
    return this.https.get(`api/articles/?keyword=${term}`)
      .map(response => response.json().data as Article[]);
  }
}
