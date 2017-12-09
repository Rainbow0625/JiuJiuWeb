import {Component,OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Article, ArticleService, Hotclick, Reading} from "../../shared/article.service";
import {Cate, CateService} from "../../shared/cate.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isclick: boolean =false;
  articles:Article[];
  hot: Hotclick[];
  cates: Cate[];
  reading: Reading[];
  private keyword: string;
  private titleFilter: FormControl= new FormControl();
  constructor(public router: Router,public articleService: ArticleService,public cateService: CateService) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(
      value => this.keyword = value);
  }

  ngOnInit() {
    this.articles= this.articleService.getArticle();
    this.cates=this.cateService.getCate();
    this.hot= this.articleService.getHotclick();
    this.reading=this.articleService.getHotReading();
  }
  onclick() {
    this.isclick=true;
  }
}
