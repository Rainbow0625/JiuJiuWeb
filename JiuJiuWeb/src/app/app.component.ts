import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  username = "";
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  check():boolean {
    if(localStorage.getItem('username')!=null) {
      this.username = localStorage.getItem('username');
      return false;
    } else {
      return true;
    }
  }
  checkadmin(): boolean {
    if(localStorage.getItem('admin')==='1') {
      return false;
    } else {
      return true;
    }
  }
  exit() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
