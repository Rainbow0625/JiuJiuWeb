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
      path:'about',
      component:AboutusComponent
    }

    ]
  }
];
