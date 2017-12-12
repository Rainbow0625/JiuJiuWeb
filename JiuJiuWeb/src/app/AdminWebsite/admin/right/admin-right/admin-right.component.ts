import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-right',
  templateUrl: './admin-right.component.html',
  styleUrls: ['./admin-right.component.css']
})
export class AdminRightComponent implements OnInit {
  public adminName:string;
  public alerts: Array<any> = [];

  constructor() {
    this.adminName = '小卿';
    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: `距离"奥特曼打小怪兽"公司上市倒计时：100天！`
      },
      {
        id: 2,
        type: 'warning',
        message: `距离公司"圣诞节"放假倒计时：7天！`
      }
    );
  }

  ngOnInit() {

  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}
