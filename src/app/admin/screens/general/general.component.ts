import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { SectorService } from 'src/app/core/services/sector/sector.service';
import { SubsetService } from 'src/app/core/services/subset/subset.service';
import { StickerService } from 'src/app/core/services/sticker/sticker.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.less']
})
export class GeneralComponent implements OnInit {

  public sectors: Sector[] = [];
  public opcion: string = '2';
  sectorSelected: Sector;

  constructor(
    private sectorServices: SectorService,
    private subsetServices: SubsetService,
    private stickerService: StickerService
  ) { 
    this.sectors = this.getSectors();
    this.sectorSelected = null;
  }

  ngOnInit(): void {
    this.sectorServices.deleteSector.subscribe( () => {
      this.deleteSector();
      });
  }

  setOption(num: string) {
    this.opcion = num;
  }
  
  switchOp(op: string){
    this.opcion = op;
  }

  getSectors(): Sector[]{
    return this.sectorServices.getAllSectors();
  }

  public selectedSector (sector: Sector): void {
    this.sectorSelected = sector;
    this.subsetServices.getSector(this.sectorSelected);
    this.stickerService.getSector(this.sectorSelected);
  }

  public deleteSector(){
    for (let i=0; i<this.sectors.length;i++){
      if (this.sectors[i] == this.sectorSelected){
        this.sectors.splice(i,1);
      }
    }
  }
}
