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
import {ImageUploadModule} from "angular2-image-upload";
import {EditpasswordComponent} from "../editpassword/editpassword.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot(),
  ],
  exports: [],
  declarations: [
    UserComponent,
    UsercenterComponent,
    FilterPipe,
    EditpasswordComponent
  ],
  providers: [ArticleService,CateService],
})
export class UserModule { }
