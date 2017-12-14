import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Usermessage, UsermessageService} from "../../../../../shared/usermessage.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-view',
  template: `
    {{ renderValue }}
  `,
})
export class ViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = "******";
    // this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}


@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent implements OnInit {
  public source: LocalDataSource = new LocalDataSource();

  settings = {
    mode:'inline',
    noDataMessage:'没有用户的数据！',
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
        editable: false,
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
        type: 'custom',
        renderComponent: ViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            alert(`${row.name} saved!`);
          });
        }
      }
    },
  };


  constructor(private service: UsermessageService) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getUsermessage().subscribe(
      data => {
        this.source.load(data);
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An ADD-USER error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

  // delete
  onDeleteConfirm(event): void {
    if (window.confirm('你确定要删除该用户吗?')) {
      event.confirm.resolve();
      const usermessage = new Usermessage(event.data.user_id,event.data.username,event.data.password,event.data.gender,
        event.data.native_place,event.data.birth,event.data.email,event.data.head_pic);
      this.service.deleteUsermessage(usermessage).subscribe(
        a => {
          if(a.flag===0) {
            alert("刪除用戶失敗！");
          }else {
            alert("刪除用戶成功！");
            this.loadData();
          }
          // this.source.remove(event.data);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

// create
  onCreateConfirm(event): void {
    if (window.confirm('你确定要新增该用户吗?')) {
      event.confirm.resolve();
      const usermessage = new Usermessage(event.newData.user_id,event.newData.username,event.newData.password,event.newData.gender,
        event.newData.native_place,event.newData.birth,event.newData.email,event.newData.head_pic);
      this.service.addUsermessage(usermessage).subscribe(
        a => {
          if(a.flag===0) {
            alert("新增用戶失敗！");
          }else {
            alert("新增用戶成功！");
            this.loadData();
          }
          // this.source.add(event.newData);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

  // edit
  onEditConfirm(event): void {
    if (window.confirm('你确定要修改该用户的个人信息吗?')) {
      event.confirm.resolve();
      const usermessage = new Usermessage(event.newData.user_id,event.newData.username,event.newData.password,event.newData.gender,
        event.newData.native_place,event.newData.birth,event.newData.email,event.newData.head_pic);
      this.service.updatesermessage(usermessage).subscribe(
        a => {
          if(a.flag===0) {
            alert("修改用戶失敗！");
          }else {
            alert("修改用戶成功！");
            this.loadData();
          }
          // this.source.update(event.data, event.newData);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }
}
