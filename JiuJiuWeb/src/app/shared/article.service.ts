import { Injectable } from '@angular/core';
import {HttpRequestService} from "./httpRequest.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleService {

  constructor(private httpService: HttpRequestService) { }

  // Article
  getArticle(): Observable<Article[]> {
    return this.httpService.loadArticle();
  }
  updateArticle(article:Article):Observable<any> {
    return this.httpService.updateArticle(article);
  }
  deleteArticle(article:Article):Observable<any> {
    return this.httpService.deleteArticle(article);
  }
  addArticle(article:Article):Observable<any> {
    return this.httpService.addArticle(article);
  }
  getDetail(article:Article):Observable<Article> {
    return this.httpService.getArticltdetail(article);
  }


  getHotclick(): Observable<Article[]> {
    return this.httpService.loadHotclick();
  }
  getHotReading(): Observable<Article[]> {
    return this.httpService.loadHotReading();
  }


}
export class Article {
  public id: number;
  public title: string;
  public author: string;
  public desc: string;
  public keywords: string;
  public content: string;
  public pic: string;
  public click: number;
  public state: number;
  public time: string;
  public cateid: string;
  constructor() {
  }
  setArticle(id: number,title: string,author: string,isRecommended:string,
             desc: string,keywords: string,content: string,pic: string,
             click: number,state: number,time: string,cateid: string):Article {
    const arti = new Article();
    arti.id = id;
    arti.title =title;
    arti.author = author;
    arti.desc = desc;
    arti.keywords = keywords;
    arti.content = content;
    arti.pic =pic;
    arti.click = click;
    arti.state =state;
    arti.time =time;
    arti.cateid =cateid;
    return arti;
  }

  setArticleId(id:number) {
    this.id = id;
  }
}
