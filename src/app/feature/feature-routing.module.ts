import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dispensary/dispensary.module').then(f => f.DispensaryModule)
  },{
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then(f => f.SalesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
