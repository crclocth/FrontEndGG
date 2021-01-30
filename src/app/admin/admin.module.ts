import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GeneralComponent } from './screens/general/general.component';
import { SectorComponent } from './components/sector/sector.component';
import { SetComponent } from './components/set/set.component';
import { StickersComponent } from './components/stickers/stickers.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { SubsetComponent } from './components/subset/subset.component';
import { NodesComponent } from './screens/nodes/nodes.component';
import { NodeCardComponent } from './components/node-card/node-card.component';
import { NodeProviderService } from '../core/providers/node/node-provider.service';

const Components = [
  AdminComponent, GeneralComponent,
  SectorComponent, SetComponent,
  StickersComponent, SubsetComponent,
  NodesComponent, NodeCardComponent
]

@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
  ],
  providers: [
    NodeProviderService
  ],
  exports: [...Components]
})
export class AdminModule { }
