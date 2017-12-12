import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import {CKEditorModule} from 'ng2-ckeditor';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserModule} from "./UserWebsite/user/user.module";
import {AdminModule} from "./AdminWebsite/admin/admin.module";
import {HomeModule} from "./HomePage/home/home.module";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {ImageUploadModule} from "angular2-image-upload";
import {HttpRequestService} from "./shared/httpRequest.service";
import {AuthService} from "./shared/auth.service";
import {AuthGuardService} from "./shared/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
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
    HttpClientModule,
    NgbModule.forRoot(),
    ImageUploadModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [HttpRequestService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
