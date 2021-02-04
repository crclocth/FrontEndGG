import { Component, Input, OnInit } from '@angular/core';
import { SectorService } from 'src/app/core/services/sector/sector.service';
import { StickerService } from 'src/app/core/services/sticker/sticker.service';
import { SubsetService } from 'src/app/core/services/subset/subset.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.less']
})
export class ModalDeleteComponent implements OnInit {

  @Input() sectorName:string;
  @Input() subsetName:string;
  @Input() opcion$:string;

  public opcion: string = '2';


  constructor(
    private sectorService: SectorService,
    private stickerService: StickerService,
    private subsetService: SubsetService
  ) {}

  ngOnInit(): void {
  }
  setOption(num: string) {
    this.opcion = num;
  }
  buttonDeletePressed(selected:string){
    if(selected == this.sectorName){
      this.stickerService.deleteAllStickersOfSector();
      this.sectorService.deleteSector.emit();
    }
    else{
      if(selected == this.subsetName){
        this.subsetService.deleteSubset.emit();
      }
    }
  }

}
