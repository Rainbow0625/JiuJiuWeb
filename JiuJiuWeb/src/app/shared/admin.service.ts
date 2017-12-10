import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  private data:Admin[]=[
    new Admin (1,"小峰"),
    new Admin (2,"小卿"),
  ];
  constructor() { }
  getData():Admin[] {
    return this.data;
  }
}
export class Admin {
  constructor(
    public id: number,
    public name: string,
  ) {}
}
