import { RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";
import {AdminRightComponent} from "./admin-right.component";
import {TypeTreeComponent} from "../type-tree/type-tree.component";
import {GraperyComponent} from "../grapery/grapery.component";

export const adminRightRoutes=[
  {
    path:'',
    component:AdminRightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRightRoutes)],
  exports: [RouterModule]
})
export class AdminRightRoutingModule {}
