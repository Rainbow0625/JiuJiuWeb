import { RouterModule } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {TypeTreeComponent} from "./type-tree/type-tree.component";
import {SidebarComponent} from "./sidebar/sidebar.component";

export const adminRoutes=[
  {
    path:'',
    component:AdminComponent,
    children:[
      {
      path:'/typeTree',
      component:TypeTreeComponent,
      /*
      redirectTo: 'home',
      pathMatch: 'full',
      loadChildren:'../post/post.module#PostModule'*/
    }

    ]
  }
];
