import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ArticleService {
  private acticle:Article[]=[
    new Article (1,"梅园","小峰","已推荐","梅园有很多好吃的","美食","我特别喜欢梅园，名字好听离宿舍还近，哈哈哈", "1.jpg",7,1,"2017-12-9","美食"),
    new Article (2,"兰园","小卿","未推荐","不错不错","娱乐","兰园的鸡腿可还吃了，甜甜的。", "2.jpg",7,1,"2017-9-8","美食"),
    new Article (3,"菊园","小卿","已推荐","菊园价格实惠","美食","我觉得菊园不错", "3.jpg",7,1,"2017-9-8","美食")
  ];
  private hotclick: Hotclick[]=[
      new Hotclick("梅园"),
  ];
  private  hotReading: Reading[]=[
    new Reading("菊园"),
  ];
  constructor() { }
  getArticle(): Article[] {
    return this.acticle;
  }
  getHotclick(): Hotclick[] {
    return this.hotclick;
  }
  getHotReading(): Reading[] {
    return this.hotReading;
  }
}
export class Article {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public isRecommended:string,
    public desc: string,
    public keywords: string,
    public content: string,
    public pic: string,
    public click: number,
    public state: number,
    public time: string,
    public category: string,
    ) {
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
