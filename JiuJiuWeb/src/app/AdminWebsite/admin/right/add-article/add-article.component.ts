import { Component, OnInit } from '@angular/core';
import {Article, ArticleService} from "../../../../shared/article.service";
import {Cate, CateService} from "../../../../shared/cate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  private data = new Article();  // xiu gai!!
  private displayCates:Cate[];

  file: Array<Object>;

  constructor(private service: ArticleService,private cateService: CateService,public router: Router) {
    this.file=[];
  }

  ngOnInit() {
    this.cateService.getCate().subscribe(
      data => {
        this.displayCates = data;
        console.log(this.displayCates);
      }
    );
  }

  getCkeditorHandler(event:any) {
    this.data.content = event;
}

  onSubmit() {
    if(this.data.state===1) {
      this.data.state = 1;
    }else {
      this.data.state =0;
    }
    console.log(this.data);
    this.addArticle();
  }

  addArticle():void {
    console.log("文章的状态"+this.data.state);
    this.service.addArticle(this.data).subscribe(
      a => {
        if(a.flag ===0) {
          alert("新增文章失敗！");
        }else {
          alert("新增文章成功！");
          this.router.navigate(['articlemanagement']);
        }
      }
    );
  }

  imageUploaded(event) {
    console.log(event);
    this.file.push(event.file);
    console.log(this.file);
  }
  imageRemoved(event) {
    console.log(event);
    const index = this.file.indexOf(event.file);
    if( index > -1) {
      this.file.splice(index, 1);
    }
    console.log(this.file);
  }
}
