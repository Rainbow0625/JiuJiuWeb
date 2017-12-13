import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpRequestService} from "./httpRequest.service";
import {observableToBeFn} from "rxjs/testing/TestScheduler";

@Injectable()
export class CateService {
  // private cateUrl ="api/cates";
  private cate: Cate[] = [
    new Cate(1, "美食", "这里有最好吃的美食"),
    new Cate(2, "运动", "跑步，游泳，秀肌肉"),
    new Cate(3, "图书", "想遨游在书海中吗？想找到志同道合的朋友们吗？"),
    new Cate(4, "科研", "想与科研大牛交流吗？想知道怎样发论文吗？那就来吧"),
    new Cate(5, "交友", "你是不是还缺一个女朋友？"),
    new Cate(6, "娱乐", "吃喝玩乐，应有尽有，只有你想不到没有你看不到"),
    new Cate(7, "就业", "月薪十万不是梦"),
  ];

  constructor(private httpService:HttpRequestService ) {
  }

  getCate(): Observable<Cate[]> {
    return this.httpService.loadCate();
  }
  deleteCate(cate:Cate):Observable<any> {
    return this.httpService.deleteCate(cate);
  }
  addCate(cate:Cate):Observable<any> {
    return this.httpService.addCate(cate);
  }
  updateCate(cate:Cate):Observable<any> {
    return this.httpService.updateCate(cate);
  }

}

export class Cate {
  constructor(
    public id:number,
    public catename: string,
    public desc: string,
  ) {
  }
}
