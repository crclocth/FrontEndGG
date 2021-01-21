import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GeneralComponent } from './screens/general/general.component';
import { SectorComponent } from './components/sector/sector.component';
import { SetComponent } from './components/set/set.component';
import { SubSetComponent } from './components/sub-set/sub-set.component';
import { StickersComponent } from './components/stickers/stickers.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const Components = [
  AdminComponent, GeneralComponent,
  SectorComponent, SetComponent,
  SubSetComponent, StickersComponent
]

@NgModule({
  declarations: [...Components],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...Components]
})
export class AdminModule { }
