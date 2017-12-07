import { Injectable } from '@angular/core';

@Injectable()
export class AdminmanagementService{

  data = [{
    id: 1,
    name: '小卿',
  }, {
    id: 2,
    name: '小峰',
  }];

  getData() {
    return this.data;
  }
}
