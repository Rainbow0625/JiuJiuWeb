import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  check():boolean {
    if(localStorage.getItem('userId')!=null) {
      return false;
    } else {
      return true;
    }
  }
  exit() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
