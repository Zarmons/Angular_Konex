import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispensaryRoutingModule } from './dispensary-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    DispensaryRoutingModule,
    SharedModule
  ]
})
export class DispensaryModule { }
