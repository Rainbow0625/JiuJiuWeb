import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  myHeaders: { [name: string]: any } = {
    'Authorization': 'MyToken',
    'Another Header': 'AnotherValue'
  };
  constructor() { }

  ngOnInit() {
  }

}
