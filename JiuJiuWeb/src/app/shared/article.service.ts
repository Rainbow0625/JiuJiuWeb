import { Injectable } from '@angular/core';
import {HttpRequestService} from "./httpRequest.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleService {
  private hotclick: Hotclick[]=[
      new Hotclick("梅园"),
  ];
  private  hotReading: Reading[]=[
    new Reading("菊园"),
  ];

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

  getHotclick(): Hotclick[] {
    return this.hotclick;
  }
  getHotReading(): Reading[] {
    return this.hotReading;
  }


}
export class Article {
  public id: number;
  public title: string;
  public author: string;
  public isRecommended:string;
  public desc: string;
  public keywords: string;
  public content: string;
  public pic: string;
  public click: number;
  public state: number;
  public time: string;
  public category: string;
  constructor() {
  }
  setArticle(id: number,title: string,author: string,isRecommended:string,
             desc: string,keywords: string,content: string,pic: string,
             click: number,state: number,time: string,category: string):Article {
    const arti = new Article();
    arti.id = id;
    arti.title =title;
    arti.author = author;
    arti.isRecommended =isRecommended;
    arti.desc = desc;
    arti.keywords = keywords;
    arti.content = content;
    arti.pic =pic;
    arti.click = click;
    arti.state =state;
    arti.time =time;
    arti.category =category;
    return arti;
  }

  setArticleId(id:number) {
    this.id = id;
  }
}
export class Hotclick {
  constructor(
    public title: string,
  ) {
  }
}
export class Reading {
  constructor(
    public title: string,
  ) {
  }
}
