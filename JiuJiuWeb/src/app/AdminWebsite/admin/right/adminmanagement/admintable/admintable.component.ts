import {LocalDataSource} from 'ng2-smart-table';
import {Component, OnInit} from '@angular/core';
import {Admin, AdminService} from "../../../../../shared/admin.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-admin-table',
  templateUrl: './admintable.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class AdmintableComponent implements OnInit{


  public source: LocalDataSource = new LocalDataSource();
  public currentData:Admin;

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
        type: 'string',
      }
    },
  };

  constructor(private service: AdminService) {}

  ngOnInit(): void {
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
      const admin = new Admin(Number(event.data.id),event.data.username,event.data.password);
      this.service.deleteAdmin(admin).subscribe(
        a => {
          console.log(a);
          this.source.remove(event.data);
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
      const admin = new Admin(Number(this.currentData.id),this.currentData.username,"");
      this.service.addAdmin(admin).subscribe(
        a => {
          console.log(a);
          this.source.add(admin);}
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
      const admin = new Admin(Number(this.currentData.id),this.currentData.username,event.data.password);
      this.service.updateAdmin(admin).subscribe(
        (a) => {
          console.log(a);
          this.source.update(event.data, event.newData);}
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }
}
