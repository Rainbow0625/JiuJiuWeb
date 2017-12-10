import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {adminRoutes, AdminRoutingModule} from "./admin.route";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AdminComponent} from "./admin.component";
import { AdminRightComponent } from './right/admin-right/admin-right.component';
import {TypeTreeComponent} from "./right/type-tree/type-tree.component";
import {UsermanagementComponent} from "./right/usermanagement/usermanagement.component";
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {StatComponent} from "./right/admin-right/stat/stat.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import { SmartTableComponent} from "./right/usermanagement/smart-table/smart-table.component";
import { AdminmanagementComponent } from './right/adminmanagement/adminmanagement.component';
import { AdmintableComponent} from "./right/adminmanagement/admintable/admintable.component";
import { CategorymanagementComponent} from './right/categorymanagement/categorymanagement.component';
import { CatetableComponent } from './right/categorymanagement/catetable/catetable.component';
import { ArticlemanagementComponent } from './right/articlemanagement/articlemanagement.component';
import { ArticletableComponent } from './right/articlemanagement/articletable/articletable.component';
import {AddArticleComponent} from "./right/add-article/add-article.component";
import {CKEditorModule} from "ng2-ckeditor";
import {CkeditorComponent} from "./right/add-article/ckeditor/ckeditor.component";
import {FormsModule} from "@angular/forms";
import {ImageUploadModule} from "angular2-image-upload";
import {AdminService} from "../../shared/admin.service";
import {ArticleService} from "../../shared/article.service";
import {CateService} from "../../shared/cate.service";
import {UsermessageService} from "../../shared/usermessage.service";

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    RouterModule.forChild(adminRoutes),
    AdminRoutingModule,
    Ng2SmartTableModule,
    CKEditorModule,
    FormsModule,
    ImageUploadModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    SidebarComponent,
    AdminRightComponent,
    TypeTreeComponent,
    StatComponent,
    UsermanagementComponent,
    SmartTableComponent,
    AdminmanagementComponent,
    AdmintableComponent,
    CategorymanagementComponent,
    CatetableComponent,
    ArticlemanagementComponent,
    ArticletableComponent,
    AddArticleComponent,
    CkeditorComponent
  ],
  entryComponents: [],
  providers: [UsermessageService,AdminService,CateService,ArticleService],
})
export class AdminModule { }
