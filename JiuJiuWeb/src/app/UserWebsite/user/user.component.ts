import {Component,OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Article, ArticleService, Hotclick, Reading} from "../../shared/article.service";
import {Cate, CateService} from "../../shared/cate.service";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {HttpRequestService} from "../../shared/httpRequest.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  articles:Article[];
  hot: Hotclick[];
  cates: Cate[];
  reading: Reading[];
  private keyword: string;
  private titleFilter: FormControl= new FormControl();
//
  private searchTerms = new Subject<string>();
  article: Observable<Article[]>;
  //
  constructor(public router: Router,public articleService: ArticleService,public cateService: CateService,
              public httprequestservice: HttpRequestService ) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(
      value => this.keyword = value);
  }
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.articles= this.articleService.getArticle();
    this.cates=this.cateService.getCate();
    this.hot= this.articleService.getHotclick();
    this.reading=this.articleService.getHotReading();
    //
    this.article=this.searchTerms.debounceTime(300).distinctUntilChanged()
      .switchMap(term=>term?this.httprequestservice.searchArticle(term):Observable.of<Article[]>([]));
  }
  onclick() {

  }
}
