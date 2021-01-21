import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './screens/general/general.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      { path: 'general', component: GeneralComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
