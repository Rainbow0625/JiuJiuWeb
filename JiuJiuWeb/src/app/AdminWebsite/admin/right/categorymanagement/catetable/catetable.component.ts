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
    noDataMessage:'没有栏目的数据！',
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
      catename: {
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
    this.loadData();
  }

  loadData() {
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
      console.log(event.data.id);
      console.log(event.data.catename);
      console.log(event.data.desc);
      const cate = new Cate(Number(event.data.id), event.data.catename, event.data.desc);
      this.service.deleteCate(cate).subscribe(
        a => {
          if(a.flag===0) {
            alert("刪除栏目失敗！");
          }else {
            alert("刪除栏目成功！");
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
    if (window.confirm('您确定创建该栏目吗？')) {
      event.confirm.resolve();
      const cate = new Cate(Number(event.newData.id), event.newData.catename, event.newData.desc);
      this.service.addCate(cate).subscribe(
        a => {
          if(a.flag===0) {
            alert("新增栏目失敗！");
          }else {
            alert("新增栏目成功！");
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
    if (window.confirm('您确定修改该栏目的相关信息吗？')) {
      event.confirm.resolve();
      const cate = new Cate(Number(event.newData.id), event.newData.catename, event.newData.desc);
      this.service.updateCate(cate).subscribe(
        a => {
          if(a.flag===0) {
            alert("修改栏目失敗！");
          }else {
            alert("修改栏目成功！");
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
