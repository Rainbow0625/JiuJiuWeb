import { RouterModule } from '@angular/router';
import {UserComponent} from "./user.component";
import {UsercenterComponent} from "../usercenter/usercenter.component";
import {NgModule} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const userRoutes=[
  {
    path:'',
    component:UserComponent,

        /*
        redirectTo: 'home',
        pathMatch: 'full',
        loadChildren:'../post/post.module#PostModule'*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
