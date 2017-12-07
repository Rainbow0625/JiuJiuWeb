import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
    image:'头像'
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    username: '@snow',
    email: 'snow@gmail.com',
    age: '20',
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    username: '@ann',
    email: 'ann@gmail.com',
    age: '21',
  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    username: '@barbara',
    email: 'barbara@yandex.ru',
    age: '43',
  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    username: '@sevan',
    email: 'sevan@outlook.com',
    age: '13',
  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    username: '@ruben',
    email: 'ruben@gmail.com',
    age: '22',
  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    username: '@karen',
    email: 'karen@yandex.ru',
    age: '33',
  }];

  getData() {
    return this.data;
  }
}
