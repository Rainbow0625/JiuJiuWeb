import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  file: Array<Object>;
  constructor() {
    this.file=[];
  }

  ngOnInit() {
  }

  imageUploaded(event) {
    console.log(event);
    this.file.push(event.file);
    console.log(this.file);
  }
  imageRemoved(event) {
    console.log(event);
    let index = this.file.indexOf(event.file);
    if( index > -1) {
      this.file.splice(index, 1);
    }
    console.log(this.file);
  }

}
