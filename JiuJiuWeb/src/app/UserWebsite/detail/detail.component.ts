import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Article, ArticleService} from "../../shared/article.service";
// import {ActivateRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public article:Article;
  public arts:Article;
  constructor(public router: Router,public articleService: ArticleService) {
  }

  ngOnInit() {
    let str=localStorage.getItem('detail');
    let arts = JSON.parse(str);
    this.arts=arts;
    // this.router.m.subscribe(params => {
    //   this.arts = params['user'];
    // this.articleService.getDetail(this.article).subscribe(
    //   data=> {
    //       this.arts=data;
    //   });

  // }
  }
}
