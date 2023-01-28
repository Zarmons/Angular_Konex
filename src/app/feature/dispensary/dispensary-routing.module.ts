import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DispensaryComponent } from './dispensary/dispensary.component';

const routes: Routes = [
  {
    path: '',
    component: DispensaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispensaryRoutingModule {}
