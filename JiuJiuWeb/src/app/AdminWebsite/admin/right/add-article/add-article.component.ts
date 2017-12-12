import { Component, OnInit } from '@angular/core';
import {Article, ArticleService} from "../../../../shared/article.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  file: Array<Object>;
  submitted = false;

  constructor(private service: ArticleService) {
    this.file=[];
  }

  private data = new Article();  // xiu gai!!

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  addArticle():void {
    this.service.addArticle(this.data).subscribe(
      a => {
        if(a.flag ===0) {
          alert("新增文章失敗！");
        }else {
          alert("新增文章成功！");
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
