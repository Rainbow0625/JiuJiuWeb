import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../../shared/product.service";
import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   @Input()
   private products:Array<Product>;



  constructor(private router:Router) { }
  ngOnInit() {

  }



}




