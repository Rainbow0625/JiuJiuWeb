import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Admin} from "./admin.service";
import {Observable} from "rxjs/Observable";
import {Article} from "./article.service";
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {Cate} from "./cate.service";
import {Usermessage} from "./usermessage.service";
import {of} from "rxjs/observable/of";

@Injectable()
export class HttpRequestService {

  constructor(private http: HttpClient,private https:Http) { }
  url;

  /*ADMIN */
  loadAdmins():Observable<Admin[]> {
    return this.http.get<Admin[]>('http://localhost:80/project_blog/public/index.php/admin/admin/lst',{withCredentials:true});
  }
  addAdmin(admin:Admin):Observable<any> {
    return this.http.post<Admin>(
      'http://localhost:80/project_blog/public/index.php/admin/admin/add', admin,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
        withCredentials:true
      }
      );
  }
  updateAdmin(admin:Admin):Observable<any> {
    return this.http.post<Admin>(
      'http://localhost:80/project_blog/public/index.php/admin/admin/edit', admin,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }
  deleteAdmin(admin:Admin):Observable<any> {
    return this.http.post<Admin>(
      'http://localhost:80/project_blog/public/index.php/admin/admin/del', admin,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }

  /*ARTICLE */
  loadArticle():Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:80/project_blog/public/index.php/admin/article/lst');
  }
  updateArticle(article:Article): Observable<any> {
    return this.http.post('http://localhost:80/project_blog/public/index.php/admin/article/edit', article,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      });
  }
  deleteArticle(article:Article): Observable<any> {
    return this.http.post('http://localhost:80/project_blog/public/index.php/admin/article/del', article,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      });
  }
  addArticle(article:Article):Observable<any> {
    return this.http.post(
      'http://localhost:80/project_blog/public/index.php/admin/article/add', article,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
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
  searchArticle(article:Article): Observable<any> {
    return this.http.post(
      'http://localhost:80/project_blog/public/index.php/admin/admin/add', article,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }


  /*CATE*/
  loadCate():Observable<Cate[]> {
    return this.http.get<Cate[]>('http://localhost:80/project_blog/public/index.php/admin/cate/lst');
  }
  addCate(cate:Cate):Observable<any> {
    return this.http.post<Cate>(
      'http://localhost:80/project_blog/public/index.php/admin/cate/add', cate,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
        withCredentials:true
      }
    );
  }
  updateCate(cate:Cate):Observable<any> {
    return this.http.post<Cate>(
      'http://localhost:80/project_blog/public/index.php/admin/cate/edit', cate,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }
  deleteCate(cate:Cate):Observable<any> {
    return this.http.post<Cate>(
      'http://localhost:80/project_blog/public/index.php/admin/cate/del', cate,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }

  /*USER*/
  loadUser():Observable<Usermessage[]> {
    return this.http.get<Usermessage[]>('http://localhost:80/project_blog/public/index.php/admin/user/lst');
  }
  addUser(user:Usermessage):Observable<any> {
    return this.http.post<Usermessage>(
      'http://localhost:80/project_blog/public/index.php/admin/user/add', user,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        // 可设置参数  params: new HttpParams().set('id', '3'),
        withCredentials:true
      }
    );
  }
  /*
  updateUser(user:Usermessage):Observable<any> {
    return this.http.post<Usermessage>(
      'http://localhost:80/.......', user,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }
  */
  updateUser(user:Usermessage):Observable<any> {
    return this.http.put('http://localhost:80/project_blog/public/index.php/admin/user/edit',user,
      {
        headers: new HttpHeaders({'Content-Type':'application/json'}),
        withCredentials:true
      });
  }
  updateUserpw(user:Usermessage):Observable<any> {
    return this.http.put('http://localhost:80/project_blog/public/index.php/index/user/changepassword',user,
      {
        headers: new HttpHeaders({'Content-Type':'application/json'}),
        withCredentials:true
      });
  }
  // 获取一个用户的个人中心信息
  getUser(user:Usermessage):Observable<any> {
    return this.http.post('http://localhost:80',user,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        withCredentials: true
      });
  }

  deleteUser(user:Usermessage):Observable<any> {
    return this.http.post<Usermessage>(
      'http://localhost:80/project_blog/public/index.php/admin/user/', user,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials:true
      }
    );
  }
}
