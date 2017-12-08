import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Article, ArticleService} from "../../shared/article.service";
import {Cate, CateService} from "../../shared/cate.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isclick: boolean =false;
  articles:Article[];
  constructor(public router: Router,public articleService: ArticleService,public cateService: CateService) { }
  cates: Cate[];

  ngOnInit() {
    this.articles= this.articleService.getArticle();
     this.cates=this.cateService.getCate();
  }
  onclick() {
    this.isclick=true;
  }
}
