import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispensaryRoutingModule } from './dispensary-routing.module';
import { DispensaryComponent } from './dispensary/dispensary.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DispensaryComponent
  ],
  imports: [
    CommonModule,
    DispensaryRoutingModule,
    SharedModule
  ]
})
export class DispensaryModule { }
