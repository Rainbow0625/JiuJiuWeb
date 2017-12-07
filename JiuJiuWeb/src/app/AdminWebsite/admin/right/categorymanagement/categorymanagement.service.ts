import { Injectable } from '@angular/core';

@Injectable()
export class CategoryManagementService {

  data = [{
    id: 1,
    categoryName: '美食',
  }, {
    id: 2,
    categoryName: '运动',
  }];

  getData() {
    return this.data;
  }
}
