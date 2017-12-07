import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    nickName: 'Leo',
    gender: '男',
    birthplace:'纽约',
    birthday: '1992.10.08',
    email: 'jiujiu@gmail.com',
    image: '' // address
  },{
    id: 2,
    nickName: 'Smile',
    gender: '女',
    birthplace:'天津',
    birthday: '1994.6.25',
    email: '347601193@qq.com',
    image:''
  },{
    id: 3,
    nickName: 'Summer',
    gender: '女',
    birthplace:'香港',
    birthday: '1994.10.12',
    email: '7639475843@qq.com',
    image:''
  }];

  getData() {
    return this.data;
  }
}
