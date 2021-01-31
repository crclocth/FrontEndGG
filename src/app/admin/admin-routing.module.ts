import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FreeNodesComponent } from './screens/freeNodes/free-nodes/free-nodes.component';
import { GeneralComponent } from './screens/general/general.component';
import { NodesComponent } from './screens/nodes/nodes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'general', component: GeneralComponent },
      { path: 'nodes', component: NodesComponent },
      { path: 'freeNodes', component: FreeNodesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
