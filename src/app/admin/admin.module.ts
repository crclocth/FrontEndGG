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
import { SubsetComponent } from './components/subset/subset.component';
import { NodesComponent } from './screens/nodes/nodes.component';
import { NodeCardComponent } from './components/node-card/node-card.component';
import { NodeProviderService } from '../core/providers/node/node-provider.service';
import { SensorProviderService } from '../core/providers/sensor/sensor-provider.service';
import { FreeNodesComponent } from './screens/freeNodes/free-nodes.component';
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import { SensorCardComponent } from './components/sensor-card/sensor-card.component';
import { SensorCardItemComponent } from './components/sensor-card-item/sensor-card-item.component';

const Components = [
  AdminComponent, GeneralComponent,
  SectorComponent, SetComponent,
  StickersComponent, SubsetComponent,
  NodesComponent, NodeCardComponent,
  FreeNodesComponent
]

@NgModule({
  declarations: [...Components, DeleteCardComponent, SensorCardComponent, SensorCardItemComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    NodeProviderService,
    SensorProviderService
  ],
  exports: [...Components]
})
export class AdminModule { }
