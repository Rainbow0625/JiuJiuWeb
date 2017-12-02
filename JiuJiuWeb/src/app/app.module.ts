import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './HomePage/login/login.component';
import { SignupComponent } from './HomePage/signup/signup.component';
import { HomeComponent } from './HomePage/home/home.component';
import { AdminComponent } from './AdminWebsite/admin/admin.component';
import { UserComponent } from './UserWebsite/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselComponent } from './UserWebsite/user/carousel/carousel.component';
import { SidebarComponent } from './AdminWebsite/admin/sidebar/sidebar.component';
import { AboutusComponent } from './HomePage/aboutus/aboutus.component';
import { UsercenterComponent } from './UserWebsite/usercenter/usercenter.component';
import { TypeTreeComponent } from './AdminWebsite/admin/type-tree/type-tree.component';
import {ProductComponent} from "./UserWebsite/user/product/product.component";
import {BannerHeadComponent} from "./UserWebsite/user/banner-head/banner-head.component";
import {HttpModule} from "@angular/http";
import {ProductService} from "./shared/product.service";




const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user', component: UserComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'product',component: ProductComponent},
  {path: 'usercenter',component:UsercenterComponent},
  {path: 'typeTree', component: TypeTreeComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'product/:productId', component: ProductComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    CarouselComponent,
    SidebarComponent,
    AboutusComponent,
    UsercenterComponent,
    TypeTreeComponent,
    BannerHeadComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
