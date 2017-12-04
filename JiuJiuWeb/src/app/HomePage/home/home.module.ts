import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from "../signup/signup.component";
import {AboutusComponent} from "../aboutus/aboutus.component";
import {homeRoutes} from "./home.routes";
import {PageComponent} from "../page/page.component";


@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
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
