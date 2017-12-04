import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {adminRoutes} from "./admin.route";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {TypeTreeComponent} from "./type-tree/type-tree.component";
import {AdminComponent} from "./admin.component";

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)

  ],
  exports: [],
  declarations: [
    AdminComponent,
    SidebarComponent,
    TypeTreeComponent,
  ],
  providers: [],
})
export class AdminModule { }
