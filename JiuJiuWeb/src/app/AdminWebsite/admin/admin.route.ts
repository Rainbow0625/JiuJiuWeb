import { RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {TypeTreeComponent} from "./right/type-tree/type-tree.component";
import {NgModule} from "@angular/core";
import {AdminRightComponent} from "./right/admin-right/admin-right.component";
import {UsermanagementComponent} from "./right/usermanagement/usermanagement.component";
import {AdminmanagementComponent} from "./right/adminmanagement/adminmanagement.component";
import {CategorymanagementComponent} from "./right/categorymanagement/categorymanagement.component";
import {ArticlemanagementComponent} from "./right/articlemanagement/articlemanagement.component";

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
      },{
        path:'categorymanagement',
        component:CategorymanagementComponent,
      },{
        path:'articlemanagement',
        component:ArticlemanagementComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
