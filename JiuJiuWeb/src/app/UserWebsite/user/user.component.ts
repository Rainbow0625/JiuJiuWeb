import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Article, ArticleService} from "../../shared/article.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  articles:Article[];
  constructor(public router: Router,public articleService: ArticleService) { }

  ngOnInit() {
    this.articles= this.articleService.getArticle();
    console.log("dddd");
  }

}
