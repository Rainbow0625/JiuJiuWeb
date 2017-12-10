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
import {ButtonViewComponent, SmartTableComponent} from "./right/usermanagement/smart-table/smart-table.component";
import {SmartTableService} from "./right/usermanagement/usermanagement.service";
import { AdminmanagementComponent } from './right/adminmanagement/adminmanagement.component';
import { AdmintableComponent} from "./right/adminmanagement/admintable/admintable.component";
import {AdminmanagementService} from "./right/adminmanagement/adminmanagement.service";
import { CategorymanagementComponent} from './right/categorymanagement/categorymanagement.component';
import { CatetableComponent } from './right/categorymanagement/catetable/catetable.component';
import {CategoryManagementService} from "./right/categorymanagement/categorymanagement.service";
import { ArticlemanagementComponent } from './right/articlemanagement/articlemanagement.component';
import { ArticletableComponent } from './right/articlemanagement/articletable/articletable.component';
import {ArticlemanagementService} from "./right/articlemanagement/articlemanagement.service";
import {AddArticleComponent} from "./right/add-article/add-article.component";
import {CKEditorModule} from "ng2-ckeditor";
import {CkeditorComponent} from "./right/add-article/ckeditor/ckeditor.component";
import {FormsModule} from "@angular/forms";
import {ImageUploadModule} from "angular2-image-upload";

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
    ButtonViewComponent,
    AdminmanagementComponent,
    AdmintableComponent,
    CategorymanagementComponent,
    CatetableComponent,
    ArticlemanagementComponent,
    ArticletableComponent,
    AddArticleComponent,
    CkeditorComponent
  ],
  entryComponents: [ButtonViewComponent],
  providers: [SmartTableService,AdminmanagementService,CategoryManagementService,ArticlemanagementService],
})
export class AdminModule { }
