import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HomeComponent } from './home.component';
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";
import {AboutusComponent} from "../aboutus/aboutus.component";
import {PageComponent} from "../page/page.component";

export const homeRoutes=[
  {
    path:'',
    component:HomeComponent,
    children:[{
      path:'',
      redirectTo: 'page',
      pathMatch: 'full',
      /*
      redirectTo: 'home',
      pathMatch: 'full',
      loadChildren:'../post/post.module#PostModule'*/
    },{
      path:'page',
      component:PageComponent
    },{
      path:'login',
      component:LoginComponent
    },{
      path:'signup',
      component:SignupComponent
    },{
      path:'aboutus',
      component:AboutusComponent
    }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
