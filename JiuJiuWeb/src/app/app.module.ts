import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {CKEditorModule} from 'ng2-ckeditor';
import { AppComponent } from './app.component';
import {ProductService} from './shared/product.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    FormsModule,
    NgbModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
