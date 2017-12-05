import { RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {TypeTreeComponent} from "./right/type-tree/type-tree.component";
import {NgModule} from "@angular/core";
import {GraperyComponent} from "./right/grapery/grapery.component";
import {AdminRightComponent} from "./right/admin-right/admin-right.component";

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
        path:'grapery',
        component:GraperyComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
