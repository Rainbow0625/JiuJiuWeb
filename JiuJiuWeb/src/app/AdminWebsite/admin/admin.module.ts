import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {adminRoutes, AdminRoutingModule} from "./admin.route";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AdminComponent} from "./admin.component";
import { AdminRightComponent } from './right/admin-right/admin-right.component';
import {TypeTreeComponent} from "./right/type-tree/type-tree.component";
import {GraperyComponent} from "./right/grapery/grapery.component";
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {StatComponent} from "./right/admin-right/stat/stat.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ButtonViewComponent, SmartTableComponent} from "./right/grapery/smart-table/smart-table.component";
import {SmartTableService} from "./right/grapery/smart-table.service";

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
    GraperyComponent,
    SmartTableComponent,
    ButtonViewComponent
  ],
  entryComponents: [ButtonViewComponent],
  providers: [SmartTableService],
})
export class AdminModule { }
