import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {UserComponent} from "./user.component";
import {userRoutes, UserRoutingModule} from "./user.route";
import {UsercenterComponent} from "../usercenter/usercenter.component";
import {CommonModule} from "@angular/common";
import {ArticleService} from "../../shared/article.service";
import {CateService} from "../../shared/cate.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [
    UserComponent,
    UsercenterComponent,
    FilterPipe
  ],
  providers: [ArticleService,CateService],
})
export class UserModule { }
