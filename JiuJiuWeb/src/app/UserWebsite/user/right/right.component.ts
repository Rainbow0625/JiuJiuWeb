import { Component, OnInit } from '@angular/core';
import {ArticleService, Hotclick, Reading} from "../../../shared/article.service";

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  hot: Hotclick[];
  reading: Reading[];
  constructor(public articleService: ArticleService) { }

  ngOnInit() {
    this.hot= this.articleService.getHotclick();
    this.reading=this.articleService.getHotReading();
  }

}
