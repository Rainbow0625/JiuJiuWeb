import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Article, ArticleService} from "../../shared/article.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  article:Article;
  arts:Article;
  @Input()
  artid:number;

  constructor(public router: Router,public articleService: ArticleService) {
  }

  ngOnInit() {
    this.article.id=this.artid;
    console.log(this.artid);
    this.articleService.getDetail(this.article).subscribe(
      data=> {
          this.arts=data;
      });

  }

}
