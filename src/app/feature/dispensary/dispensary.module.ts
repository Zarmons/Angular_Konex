import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispensaryRoutingModule } from './dispensary-routing.module';
import { DispensaryComponent } from './dispensary/dispensary.component';


@NgModule({
  declarations: [
    DispensaryComponent
  ],
  imports: [
    CommonModule,
    DispensaryRoutingModule
  ]
})
export class DispensaryModule { }
