import { Injectable } from '@angular/core';
import {HttpRequestService} from "./httpRequest.service";

@Injectable()
export class ArticleService {
  public article:Article;
  private articles:Article[]=[
    // this.article.setArticle(1,"梅园","小峰","已推荐","梅园有很多好吃的","美食","我特别喜欢梅园，名字好听离宿舍还近，哈哈哈", "1.jpg",7,1,"2017-12-9","美食"),
    // new Article (2,"兰园","小卿","未推荐","不错不错","娱乐","兰园的鸡腿可还吃了，甜甜的。", "2.jpg",7,1,"2017-9-8","美食"),
    // new Article (3,"菊园","小卿","已推荐","菊园价格实惠","美食","我觉得菊园不错", "3.jpg",7,1,"2017-9-8","美食")
  ];

  private hotclick: Hotclick[]=[
      new Hotclick("梅园"),
  ];
  private  hotReading: Reading[]=[
    new Reading("菊园"),
  ];

  constructor(private httpService: HttpRequestService) { }

  getArticle(): Article[] {
    return this.articles;
  }
  getHotclick(): Hotclick[] {
    return this.hotclick;
  }
  getHotReading(): Reading[] {
    return this.hotReading;
  }

  addArticle(article:Article) {
    this.httpService.addArticle(article).subscribe( acticle => this.articles.push(acticle));
    console.log(this.articles);
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
