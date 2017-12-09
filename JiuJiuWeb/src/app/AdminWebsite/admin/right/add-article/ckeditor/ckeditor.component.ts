import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {

  ckeditorContent = '';

  config = {
    filebrowserBrowseUrl: '&&&&&',
    filebrowserUploadUrl: '&&&'
  };

  constructor() { }

  ngOnInit() {
  }

}
