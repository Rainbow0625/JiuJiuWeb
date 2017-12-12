import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() name: string;
  @Input() count: number;
  @Input() title:string;
  @Output() event: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

}
