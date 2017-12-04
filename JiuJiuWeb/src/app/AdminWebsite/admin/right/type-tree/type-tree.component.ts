import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-type-tree',
  templateUrl: './type-tree.component.html',
  styleUrls: ['./type-tree.component.css']

})
export class TypeTreeComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
