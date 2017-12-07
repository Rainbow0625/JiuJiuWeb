import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {ArticlemanagementService} from "../articlemanagement.service";

@Component({
  selector: 'app-article-table',
  templateUrl: './articletable.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class ArticletableComponent implements OnInit {
  public source: LocalDataSource = new LocalDataSource();

  settings = {
    mode:'inline',
    add: {
      addButtonContent: '',
      createButtonContent: '',
      cancelButtonContent: '',
    },
    edit: {
      editButtonContent: '',
      saveButtonContent: '',
      cancelButtonContent: '',
    },
    delete: {
      deleteButtonContent: '删除',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'string',
      },
      title: {
        title: '文章标题',
        type: 'string',
      },
      author: {
        title: '文章作者',
        type: 'string',
      },
      isRecommended: {
        title: '是否推荐',
        type: 'string',
      },
      image: {
        title: '缩略图',
        //  html!!
        type: 'html',
      },
      category: {
        title: '所属栏目',
        type: 'string',
      },
    },
  };

  constructor(private service: ArticlemanagementService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  // delete
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete it?')) {
      event.confirm.resolve();
      this.source = event.source;
      this.source.remove(event.data);
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

// create
  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to create it?')) {
      event.confirm.resolve();
      this.source = event.source;
      this.source.add(event.newData);
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

  // edit
  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to update it?')) {
      event.confirm.resolve();
      this.source = event.source;
      this.source.update(event.data, event.newData);
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
  }

}
