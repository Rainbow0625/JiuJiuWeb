import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-usercenter',
  templateUrl: './usercenter.component.html',
  styleUrls: ['./usercenter.component.css']
})
export class UsercenterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


}
