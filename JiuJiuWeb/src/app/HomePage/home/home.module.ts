import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from "../signup/signup.component";
import {AboutusComponent} from "../aboutus/aboutus.component";
import {homeRoutes, HomeRoutingModule} from "./home.routes";
import {PageComponent} from "../page/page.component";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    PageComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent
  ],
  providers: [],
})
export class HomeModule { }
