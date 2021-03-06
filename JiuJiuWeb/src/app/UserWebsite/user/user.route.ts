import { RouterModule } from '@angular/router';
import {UserComponent} from "./user.component";
import {UsercenterComponent} from "../usercenter/usercenter.component";
import {NgModule} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {EditpasswordComponent} from "../editpassword/editpassword.component";
import {DetailComponent} from "../detail/detail.component";

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
