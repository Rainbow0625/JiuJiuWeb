import { Injectable } from '@angular/core';

@Injectable()
export class CateService {
  private cate: Cate[]=[
    new Cate("美食","这里有最好吃的美食"),
    new Cate("运动","跑步，游泳，秀肌肉"),
    new Cate("图书","想遨游在书海中吗？想找到志同道合的朋友们吗？"),
    new Cate("科研","想与科研大牛交流吗？想知道怎样发论文吗？那就来吧"),
    new Cate("交友","你是不是还缺一个女朋友？"),
    new Cate("娱乐","吃喝玩乐，应有尽有，只有你想不到没有你看不到"),
    new Cate("就业","月薪十万不是梦"),
  ]
  constructor() { }
  getCate(): Cate[] {
     return this.cate;
  }
}
export class Cate {
  constructor(
    public name: string,
    public desc: string,
  ) {
  }
}
