import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {UserComponent} from "./user.component";
import {userRoutes, UserRoutingModule} from "./user.route";
import {UsercenterComponent} from "../usercenter/usercenter.component";
import {ProductComponent} from "./product/product.component";
import {CommonModule} from "@angular/common";
import {RightComponent} from "./right/right.component";
import {ArticleService} from "../../shared/article.service";
import {CateService} from "../../shared/cate.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    UserRoutingModule
  ],
  exports: [],
  declarations: [
    UserComponent,
    UsercenterComponent,
    ProductComponent,
    RightComponent
  ],
  providers: [ArticleService,CateService],
})
export class UserModule { }
