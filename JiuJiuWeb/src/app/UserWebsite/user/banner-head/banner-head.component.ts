import {AfterContentInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-banner-head',
  templateUrl: './banner-head.component.html',
  styleUrls: ['./banner-head.component.css']
})
export class BannerHeadComponent implements OnInit, AfterContentInit {
  @Output()
  navChange = new EventEmitter();

  public navs: any[] = [];
  public curRoutePath: string = '/baijiu';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.navs = NAVS;
  }

  navClick(path: string) {
    this.curRoutePath = path || '/all';
    this.navChange.emit(path.substr(1));
  }
  ngAfterContentInit(): void {
    if (location.pathname === '/') {
      this.curRoutePath = '/all';
    } else {
      this.curRoutePath = location.pathname;
    }
  }
}
export const NAVS: any = [
  {
    "routerUrl": "/baijiu",
    "navIcon": "all",
    "navText": "白酒",
  },
  {
    "routerUrl": "/hongjiu",
    "navIcon": "fe",
    "navText": "红酒",

  },
  {
    "routerUrl": "/yangjiu",
    "navIcon": "php",
    "navText": "洋酒",

  },
  {
    "routerUrl": "/react",
    "navIcon": "java",
    "navText": "啤酒",

  },
  {
    "routerUrl": "/huangjiu",
    "navIcon": "ios",
    "navText": "黄酒",

  },
  {
    "routerUrl": "/baojianjiu",
    "navIcon": "android",
    "navText": "保健酒",
  },
  {
    "routerUrl": "/yutiaojiu",
    "navIcon": "fe",
    "navText": "预调酒",
  },
  {
    "routerUrl": "/peizhijiu",
    "navIcon": "fe",
    "navText": "配制酒",
  }
];
