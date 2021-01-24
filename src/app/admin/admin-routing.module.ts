import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './screens/general/general.component';
import { NodesComponent } from './screens/nodes/nodes.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      { path: 'general', component: GeneralComponent },
      { path: 'nodes', component: NodesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
