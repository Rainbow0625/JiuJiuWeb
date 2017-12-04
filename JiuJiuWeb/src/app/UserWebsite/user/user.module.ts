import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {UserComponent} from "./user.component";
import {userRoutes} from "./user.route";
import {UsercenterComponent} from "../usercenter/usercenter.component";
import {BannerHeadComponent} from "./banner-head/banner-head.component";
import {ProductComponent} from "./product/product.component";
import {ProductService} from "../../shared/product.service";
import {UsermessageService} from "../../shared/usermessage.service";

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),

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
