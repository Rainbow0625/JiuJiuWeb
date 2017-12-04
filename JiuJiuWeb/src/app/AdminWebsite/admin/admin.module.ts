import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {adminRoutes, AdminRoutingModule} from "./admin.route";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AdminComponent} from "./admin.component";
import { AdminRightComponent } from './right/admin-right/admin-right.component';
import {TypeTreeComponent} from "./right/type-tree/type-tree.component";
import {GraperyComponent} from "./right/grapery/grapery.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    AdminRoutingModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    SidebarComponent,
    AdminRightComponent,
    TypeTreeComponent,
    GraperyComponent,
  ],
  providers: [],
})
export class AdminModule { }
