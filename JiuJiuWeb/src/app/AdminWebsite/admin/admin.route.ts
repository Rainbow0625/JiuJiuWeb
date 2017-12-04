import { RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {TypeTreeComponent} from "./type-tree/type-tree.component";
import {NgModule} from "@angular/core";

export const adminRoutes=[
  {
    path:'',
    component:AdminComponent,
    children:[
      {
      path:'typeTree',
      component:TypeTreeComponent,
      /*
      redirectTo: 'home',
      pathMatch: 'full',
      loadChildren:'../post/post.module#PostModule'*/
    }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
