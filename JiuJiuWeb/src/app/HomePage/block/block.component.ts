import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Cate, CateService} from "../../shared/cate.service";



@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  private cates:Cate[];
  constructor(public router: Router,public cateService: CateService) {
  }

  ngOnInit() {
    this.cateService.getCate().subscribe(
      data => {
        console.log(data);
        this.cates = data;
      }
    );
  }
  hit() {
    const link=localStorage.getItem('username');
    if(link!==null) {
      this.router.navigate(['user']);
    } else {
        this.router.navigate(['login']);
      }
    }
}
