import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRightComponent} from "./admin-right.component";
import {StatComponent} from "./stat/stat.component";

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    AdminRightComponent,
  ],
  exports: [],
  declarations: [
    AdminRightComponent,

  ],
  providers: [],
})
export class AdminRightModule { }
