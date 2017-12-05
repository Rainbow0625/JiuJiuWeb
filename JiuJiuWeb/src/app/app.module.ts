import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ProductService} from './shared/product.service';

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
import { TypeTreeComponent } from './AdminWebsite/admin/right/type-tree/type-tree.component';
import {ProductComponent} from './UserWebsite/user/product/product.component';
import {BannerHeadComponent} from './UserWebsite/user/banner-head/banner-head.component';
import {UserModule} from "./UserWebsite/user/user.module";
import {AdminModule} from "./AdminWebsite/admin/admin.module";
import {HomeModule} from "./HomePage/home/home.module";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    /*
    AdminComponent,
    UserComponent,
    CarouselComponent,
    SidebarComponent,

    UsercenterComponent,
    TypeTreeComponent,
    BannerHeadComponent,
    ProductComponent
    */
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    HomeModule,
    NgbModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
