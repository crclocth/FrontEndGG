import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification/notification.service';
import { SubsetService } from './services/subset/subset.service';
import { SectorService } from './services/sector/sector.service';
import { NodeService } from './services/node/node.service';
import { SensorService } from './services/sensor/sensor.service';
import { HttpService } from './services/http/http.service';
import { StickerService } from './services/sticker/sticker.service';

const Services = [
  NotificationService,
  SectorService,
  SubsetService,
  NodeService,
  SensorService,
  HttpService,
  StickerService
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [...Services]
 
})
export class CoreModule { }
