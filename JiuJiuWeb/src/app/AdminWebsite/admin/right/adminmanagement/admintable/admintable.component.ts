import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Admin, AdminService} from "../../../../../shared/admin.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-button-view',
  template: `
    {{ renderValue }}
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
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
  selector: 'app-admin-table',
  templateUrl: './admintable.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AdmintableComponent implements OnInit {


  public source: LocalDataSource = new LocalDataSource();
  public currentData:Admin;

  settings = {
    mode:'inline',
    noDataMessage:'没有管理员的数据！',
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
        id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
        username: {
        title: '管理员名称',
        type: 'string',
      },
        password: {
        title: '密码',
          type: 'custom',
          renderComponent: ButtonViewComponent,
          onComponentInitFunction(instance) {
            instance.save.subscribe(row => {
              alert(`${row.name} saved!`);
            });
          }
      }
    },
  };

  constructor(private service: AdminService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAdmins().subscribe(
      data => { this.source.load(data); },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An ADD-USER error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
}


  // delete
  onDeleteConfirm(event): void {
    if (window.confirm('您确定删除该管理员权限吗?')) {
      event.confirm.resolve();
      console.log(event.data.id);
      console.log(event.data.username);
      console.log(event.data.password);
      const admin = new Admin(Number(event.data.id),event.data.username,event.data.password);
      this.service.deleteAdmin(admin).subscribe(
        a => {
          if(a.flag===0) {
            alert("刪除用戶失敗！");
          }else {
            alert("刪除用戶成功！");
            // 刷新页面
            this.loadData();
          }
          // this.source.remove(admin);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

  // create
  onCreateConfirm(event): void {
    if (window.confirm('您确定创建该管理员用户吗？')) {
      event.confirm.resolve();
      this.currentData = event.newData;
      const admin = new Admin(Number(this.currentData.id),this.currentData.username,this.currentData.password);
      this.service.addAdmin(admin).subscribe(
        data => {
          if(data.flag===0) {
            alert("創建用戶失敗！");
          }else {
            alert("創建用戶成功！");
            // 刷新页面
            this.loadData();
          }
          // this.source.add(admin);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

  // edit
  onEditConfirm(event): void {
    if (window.confirm('您确定修改该管理员的信息吗？')) {
      event.confirm.resolve();
      this.currentData = event.newData;
      const admin = new Admin(Number(this.currentData.id),this.currentData.username,this.currentData.password);
      console.log(this.currentData.id);
      console.log(this.currentData.username);
      console.log(this.currentData.password);
      this.service.updateAdmin(admin).subscribe(
        a => {
          if(a.flag===0) {
            alert("修改用戶失敗！");
          }else {
            alert("修改用戶成功！");
            // 刷新页面
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
