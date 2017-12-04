import { RouterModule } from '@angular/router';
import {UserComponent} from "./user.component";
import {UsercenterComponent} from "../usercenter/usercenter.component";
import {NgModule} from "@angular/core";

export const userRoutes=[
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'usercenter',
        component:UsercenterComponent,
        /*
        redirectTo: 'home',
        pathMatch: 'full',
        loadChildren:'../post/post.module#PostModule'*/
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
