import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {adminRightRoutes, AdminRightRoutingModule} from "./admin-right.routes";
import {TypeTreeComponent} from "../type-tree/type-tree.component";
import {GraperyComponent} from "../grapery/grapery.component";
import {AdminRightComponent} from "./admin-right.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRightRoutes),
    AdminRightRoutingModule,
  ],
  exports: [],
  declarations: [
    AdminRightComponent,
  ],
  providers: [],
})
export class AdminModule { }
