import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  private projects:PROJECTS[]=[
    new PROJECTS("美食版块","这里有最好吃的美食"),
    new PROJECTS("运动版块","这里有最好吃的美食"),
    new PROJECTS("图书版块","这里有最好吃的美食"),
    new PROJECTS("科研版块","这里有最好吃的美食"),
    new PROJECTS("娱乐版块","这里有最好吃的美食"),
    new PROJECTS("交友版块","这里有最好吃的美食"),
    new PROJECTS("就业版块","这里有最好吃的美食"),
  ];
  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
export class PROJECTS {
  constructor(public title:string,
               public desc:string) {
  }
}
