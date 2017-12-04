import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive: boolean = false;
  // showMenu: string = '';
  constructor() {
    this.isActive = !this.isActive;
  }

  ngOnInit() {
  }

}
