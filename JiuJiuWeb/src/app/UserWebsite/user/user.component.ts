import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";

import {Article, ArticleService} from "../../shared/article.service";
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
  public hot: Article[];
  public cates: Cate[];
  public reading: Article[];
  public keyword: string;
  public articles:Article[];
  public titleFilter: FormControl= new FormControl();
  @Output() artid:EventEmitter<any> = new EventEmitter();
  constructor(public router: Router,public articleService: ArticleService,public cateService: CateService,
              public httprequestservice: HttpRequestService ) {
    this.titleFilter.valueChanges.debounceTime(500).subscribe(
      value => this.keyword = value);
  }

  search(item:number): void {
    console.log(item);
    this.cate = new Cate(item,'','');
    this.httprequestservice.searchArticle(this.cate).subscribe(
      data => {
        console.log(data);
        this.articles=data;
        console.log(this.articles);
      }
    );
  }
  goDetail(id:number) {
    this.artid.emit(id);
    console.log(id);
  }
  ngOnInit() {
    this.articleService.getHotclick().subscribe(
      data3 => { console.log(data3);
        this.hot = data3;
      }
    );
    this.articleService.getHotReading().subscribe(
      data4 => { console.log(data4);
        this.reading = data4;}
    );
   this.articleService.getArticle().subscribe(
      data1 => {this.articles = data1;}
    );
    this.cateService.getCate().subscribe(
      data2 => {
        this.cates = data2;
        console.log(data2);
      });
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
