import { RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {TypeTreeComponent} from "./right/type-tree/type-tree.component";
import {NgModule} from "@angular/core";
import {AdminRightComponent} from "./right/admin-right/admin-right.component";
import {UsermanagementComponent} from "./right/usermanagement/usermanagement.component";
import {AdminmanagementComponent} from "./right/adminmanagement/adminmanagement.component";

export const adminRoutes=[
  {path:'', component:AdminComponent,
    children:[
      {
        path:'',
        component:AdminRightComponent,
      },{
        path:'typeTree',
        component:TypeTreeComponent,
      },{
        path:'usermanagement',
        component:UsermanagementComponent,
      },{
        path:'adminmanagement',
        component:AdminmanagementComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
