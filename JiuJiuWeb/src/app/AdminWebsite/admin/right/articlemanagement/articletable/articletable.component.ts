import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {Article, ArticleService} from "../../../../../shared/article.service";
import {HttpErrorResponse} from "@angular/common/http";

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
    noDataMessage:'没有文章的数据！',
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
      state: {
        title: '是否推荐',
        type: 'string',
      },
      pics: {
        title: '缩略图',
        //  html!!
        type: 'string',
      },
      cateid: {
        title: '所属栏目编号',
        type: 'string',
      },
    },
  };

  constructor(private service: ArticleService) {
  }

  ngOnInit() {
    this.service.getArticle().subscribe(
      data => { this.source.load(data); },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An load-article error occurred:', err.error.message);
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
    if (window.confirm('您确定删除该文章吗?')) {
      event.confirm.resolve();
      const article = new Article();
      article.setArticleId(event.data.id); // only id not null
      this.service.deleteArticle(article).subscribe(
        a => {
          if(a.flag===0) {
            alert("刪除文章失敗！");
          }else {
            alert("刪除文章成功！");
          }
          this.source.remove(event.data);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }

  // edit
  onEditConfirm(event): void {
    if (window.confirm('您确定修改该文章吗?')) {
      event.confirm.resolve();
      const article = new Article();
      article.setArticleId(event.newData.id); // only id not null
      this.service.updateArticle(article).subscribe(
        a => {
          if(a.flag===0) {
            alert("修改文章失敗！");
          }else {
            alert("修改文章成功！");
          }
          this.source.update(event.data, event.newData);
        }
      );
      console.log(this.source.getAll());
    } else {
      event.confirm.reject();
    }
  }


}
