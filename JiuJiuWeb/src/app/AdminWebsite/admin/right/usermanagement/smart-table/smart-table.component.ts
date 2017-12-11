import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UsermessageService} from "../../../../../shared/usermessage.service";

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {
  public source: LocalDataSource = new LocalDataSource();

  settings = {
    mode:'inline',
    add: {
      addButtonContent: '添加',
      createButtonContent: '新建',
      cancelButtonContent: '取消',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '编辑',
      saveButtonContent: '保存',
      cancelButtonContent: '取消',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '删除',
      confirmDelete: true,
    },
    columns: {
      user_id: {
        title: 'ID',
        type: 'number',
      },
      username: {
        title: '昵称',
        type: 'string',
      },
      gender: {
        title: '性别',
        type: 'string',
      },
      native_place: {
        title: '出生地点',
        type: 'string',
      },
      birth: {
        title: '出生日期',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      password: {
      title: '密码',
      type: 'string',
      }
    },
  };


  constructor(private service: UsermessageService) {
    const data = this.service.getUsermessage();
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
}
