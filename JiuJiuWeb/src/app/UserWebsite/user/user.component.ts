import {Component,OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Article, ArticleService, Hotclick, Reading} from "../../shared/article.service";
import {Cate, CateService} from "../../shared/cate.service";
import {FormControl} from "@angular/forms";
import {HttpRequestService} from "../../shared/httpRequest.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public cate:Cate;
  public hot: Hotclick[];
  public cates: Cate[];
  public reading: Reading[];
  public keyword: string;
  public articles:Article[];
  public titleFilter: FormControl= new FormControl();
  constructor(public router: Router,public articleService: ArticleService,public cateService: CateService,
              public httprequestservice: HttpRequestService ) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(
      value => this.keyword = value);
  }

  search(item:number): void {
    console.log(item);
    this.cate = new Cate(item,'','');
    console.log(this.cate);
    this.httprequestservice.searchArticle(this.cate).subscribe(
      data => {
        this.articles=data;
      }
    );
  }
  ngOnInit() {
    this.articleService.getArticle().subscribe(
      data => {this.articles = data;}
    );
    this.cateService.getCate().subscribe(
      data => {
        this.cates = data;
        console.log(data);
      }
    );

    this.articleService.getHotclick().subscribe(
      data => { this.hot = data;
      console.log(this.hot);}
    );
    this.articleService.getHotReading().subscribe(
      data => { this.reading = data;
      console.log(this.reading);}
    );
    //

  /* this.article=this.searchTerms.debounceTime(300).distinctUntilChanged()
      .switchMap (term=>term?this.httprequestservice.searchArticle(term):Observable.of<Article[]>([])).catch(error=> {
        console.log(error);
        return Observable.of<Article[]>([]);
    });*/
   /* this.article$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.httprequestservice.searchArticle(term)),
    );*/
  }
}
