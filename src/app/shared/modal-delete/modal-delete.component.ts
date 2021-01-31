import { Component, OnInit } from '@angular/core';
import { SectorService } from 'src/app/core/services/sector/sector.service';
import { StickerService } from 'src/app/core/services/sticker/sticker.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.less']
})
export class ModalDeleteComponent implements OnInit {

  public opcion: string = '2';
  constructor(
    public sectorService: SectorService,
    public stickerService: StickerService
  ) { }

  ngOnInit(): void {
  }
  setOption(num: string) {
    this.opcion = num;
  }
  buttonDeletePressed(){
    this.stickerService.deleteAllStickersOfSector();
    this.sectorService.deleteSector.emit();
  }

}
