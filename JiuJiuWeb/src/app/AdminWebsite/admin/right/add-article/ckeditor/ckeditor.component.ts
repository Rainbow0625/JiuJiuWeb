import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  ckeditorContent:string;
  @Output()
  content:EventEmitter<any> = new EventEmitter();

  config = {
    filebrowserBrowseUrl: '&&&&&',
    filebrowserUploadUrl: '&&&'
  };

  constructor() {
    setInterval( () => {
      this.content.emit(this.ckeditorContent);
      },1000
    );

  }

  ngOnInit() {
  }

}
