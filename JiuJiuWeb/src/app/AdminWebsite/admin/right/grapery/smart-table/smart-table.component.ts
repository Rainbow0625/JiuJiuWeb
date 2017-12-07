import {LocalDataSource, ViewCell} from 'ng2-smart-table';
import {SmartTableService} from "../smart-table.service";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-view',
  template: `
    <button class="btn btn-info" [routerLink]="['./image']">{{ value }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  // renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    // this.renderValue = this.value.toString().toUpperCase();
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
export class SmartTableComponent {

  settings = {
    add: {
      addButtonContent: '添加',
      createButtonContent: '新建',
      cancelButtonContent: '取消',
    },
    edit: {
      editButtonContent: '编辑',
      saveButtonContent: '保存',
      cancelButtonContent: '取消',
    },
    delete: {
      deleteButtonContent: '删除',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
      image:{
        title: 'image',
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

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
