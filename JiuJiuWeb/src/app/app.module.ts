import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {CKEditorModule} from 'ng2-ckeditor';
import { AppComponent } from './app.component';
<<<<<<< HEAD


import { LoginComponent } from './HomePage/login/login.component';
import { SignupComponent } from './HomePage/signup/signup.component';
import { HomeComponent } from './HomePage/home/home.component';
import { AdminComponent } from './AdminWebsite/admin/admin.component';
import { UserComponent } from './UserWebsite/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidebarComponent } from './AdminWebsite/admin/sidebar/sidebar.component';
import { AboutusComponent } from './HomePage/aboutus/aboutus.component';
import { UsercenterComponent } from './UserWebsite/usercenter/usercenter.component';
import { TypeTreeComponent } from './AdminWebsite/admin/right/type-tree/type-tree.component';
=======
import {ProductService} from './shared/product.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
>>>>>>> ae259a172b54fbd554daafb1d4f60efe0f13591c
import {UserModule} from "./UserWebsite/user/user.module";
import {AdminModule} from "./AdminWebsite/admin/admin.module";
import {HomeModule} from "./HomePage/home/home.module";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {ImageUploadModule} from "angular2-image-upload";


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
    CKEditorModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    HomeModule,
<<<<<<< HEAD
    HttpClientModule,
=======
    FormsModule,
>>>>>>> ae259a172b54fbd554daafb1d4f60efe0f13591c
    NgbModule.forRoot(),
    ImageUploadModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
