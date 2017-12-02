import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products:Product[]=[
    new Product("baijiu","茅台", "甘甜", "中酸","半干型","高泡酒","45-50","浓香","","","",100,"","","合格","",""),
    new Product("yangjiu","五粮液", "甘甜", "中酸","半干型","高泡酒","45-50","浓香","","","",100,"","","不合格","","")
  ];

  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }


}
export class Product {
  constructor(
    //  img: string;
    public type: string,// 所属类别跳转用
    public name: string,
    public taste: string,   // 口感
    public sour: string,
    public sweetness: string,
    public ty: string,
    public degree: string,
    public flavor: string,   // 香型
    public proplace: string,  // 生产地点
    public probatch: string, // 生产批次
    public time: string, // 抽检时间
    public num: number,  // 抽检数量
    public saleplace: string,  // 销售地点
    public people: string,  // 质检员
    public result: string,   // 结果
    public reason: string,// 不合格原因
    public des: string) {

  }
}
