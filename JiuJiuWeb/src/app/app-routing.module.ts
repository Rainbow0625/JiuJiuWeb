import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsercenterComponent} from "./UserWebsite/usercenter/usercenter.component";

/*
const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
*/
const routeConfig: Routes = [
  {path: '', loadChildren: './HomePage/home/home.module#HomeModule'},
  {path: 'admin', loadChildren: './AdminWebsite/admin/admin.module#AdminModule'},
  {path: 'user', loadChildren: './UserWebsite/user/user.module#UserModule'},
  {path:'usercenter', component:UsercenterComponent}
  /*
  {path: 'about', component: AboutusComponent},
  {path: 'product', component: ProductComponent},
  {path: 'usercenter', component:UsercenterComponent},
  {path: 'typeTree', component: TypeTreeComponent},

  {path: 'product/:productId', component: ProductComponent}
  */
];

@NgModule({
    imports: [RouterModule.forRoot(routeConfig)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

