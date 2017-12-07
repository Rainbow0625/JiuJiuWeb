import { Injectable } from '@angular/core';

@Injectable()
export class ArticlemanagementService {

  data = [{
    id: 1,
    title: '梅园餐厅',
    author: '小卿',
    isRecommended:'已推荐',
    image: '<button class="btn btn-info" >增加</button>',
    category: '美食',
  },{
    id: 2,
    title: '兰园餐厅',
    author: '小峰',
    isRecommended:'未推荐',
    image: '',
    category: '美食',
  },{
    id: 3,
    title: '竹园餐厅',
    author: '小峰',
    isRecommended:'已推荐',
    image: '',
    category: '美食',
  }];

  getData() {
    return this.data;
  }
}
