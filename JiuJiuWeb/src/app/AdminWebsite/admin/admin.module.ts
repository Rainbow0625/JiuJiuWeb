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

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    RouterModule.forChild(adminRoutes),
    AdminRoutingModule,
    Ng2SmartTableModule,
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
    AdmintableComponent
  ],
  entryComponents: [ButtonViewComponent],
  providers: [SmartTableService,AdminmanagementService],
})
export class AdminModule { }
