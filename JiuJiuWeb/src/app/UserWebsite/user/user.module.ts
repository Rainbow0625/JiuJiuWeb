import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {UserComponent} from "./user.component";
import {userRoutes, UserRoutingModule} from "./user.route";
import {UsercenterComponent} from "../usercenter/usercenter.component";
import {BannerHeadComponent} from "./banner-head/banner-head.component";
import {ProductComponent} from "./product/product.component";
import {ProductService} from "../../shared/product.service";
import {UsermessageService} from "../../shared/usermessage.service";
import {CommonModule} from "@angular/common";

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
    BannerHeadComponent,
    ProductComponent,
  ],
  providers: [ProductService,UsermessageService],
})
export class UserModule { }
