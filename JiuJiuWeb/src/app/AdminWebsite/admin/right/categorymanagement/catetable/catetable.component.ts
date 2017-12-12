import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Cate, CateService} from "../../../../../shared/cate.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-cate-table',
  templateUrl: './catetable.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class CatetableComponent implements OnInit {

  public source: LocalDataSource = new LocalDataSource();

  settings = {
    mode: 'inline',
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
        type: 'string',
      },
      name: {
        title: '栏目名称',
        type: 'string',
      },
      desc: {
        title: '描述',
        type: 'string',
      }
    },
  };

  constructor(private service: CateService) {

  }

  ngOnInit() {
    this.service.getCate().subscribe(
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
    if (window.confirm('您确定删除该栏目吗?')) {
      event.confirm.resolve();
      const cate = new Cate(Number(event.data.id), event.data.name, event.data.desc);
      this.service.deleteCate(cate).subscribe(
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
    if (window.confirm('您确定创建该栏目吗？')) {
      event.confirm.resolve();
      const cate = new Cate(Number(event.newData.id), event.newData.name, event.newData.desc);
      this.service.addCate(cate).subscribe(
        a => {
          console.log(a);
          this.source.add(event.newData);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

  // edit
  onEditConfirm(event): void {
    if (window.confirm('您确定修改该栏目的相关信息吗？')) {
      event.confirm.resolve();
      const cate = new Cate(Number(event.newData.id), event.newData.name, event.newData.desc);
      this.service.updateCate(cate).subscribe(
        a => {
          console.log(a);
          this.source.update(event.data, event.newData);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

}
