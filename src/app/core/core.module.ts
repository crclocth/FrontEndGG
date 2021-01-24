import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification/notification.service';
import { SubsetService } from './services/subset/subset.service';
import { SectorService } from './services/sector/sector.service';
import { NodeService } from './services/node/node.service';

const Services = [
  NotificationService,
  SectorService,
  SubsetService,
  NodeService
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    }),
  ],
  providers: [...Services]
 
})
export class CoreModule { }
