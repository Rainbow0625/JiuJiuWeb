import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Product, ProductService} from "../../shared/product.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  productss:Array<Product>;
  constructor(public router: Router,private productService: ProductService) { }

  ngOnInit() {
    this.productss= this.productService.getProducts();
  }
  navChange($event) {
    console.log($event);
    this.changeData($event);
  }

  changeData(type: string) {
    this.productss = this.filterPro(type);
  }

  filterPro(type: string): Array<Product> {
    if (!type) {
      return this.productss;
    }

    return Array<Product>().filter(item => {
      return item.type.includes(type);
    })
  }

}
