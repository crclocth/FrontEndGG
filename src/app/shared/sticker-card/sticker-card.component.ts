import { Component, Input, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { Sticker } from 'src/app/core/models/sticker-model';
import { SectorService } from 'src/app/core/services/sector/sector.service';
import { StickerService } from 'src/app/core/services/sticker/sticker.service';

@Component({
  selector: 'app-sticker-card',
  templateUrl: './sticker-card.component.html',
  styleUrls: ['./sticker-card.component.less']
})
export class StickerCardComponent implements OnInit {

  @Input() insector: Sector;
  public sendSticker:Sticker[]=[];
  constructor(
    public stickerService: StickerService,
    public SectorService: SectorService
  ) { 
    
  }
  
  ngOnInit(): void {
    this.sendSticker = this.stickerService.arraySticker;
  }  
}
