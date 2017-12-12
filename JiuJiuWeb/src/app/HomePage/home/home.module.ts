import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from "../signup/signup.component";
import {AboutusComponent} from "../aboutus/aboutus.component";
import {homeRoutes, HomeRoutingModule} from "./home.routes";
import {PageComponent} from "../page/page.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BlockComponent} from "../block/block.component";
import {UsermessageService} from "../../shared/usermessage.service";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    PageComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    BlockComponent
  ],
  providers: [UsermessageService],
})
export class HomeModule { }
