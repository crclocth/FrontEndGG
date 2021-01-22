import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { SectorService } from 'src/app/core/services/sector/sector.service';
import { SubsetService } from 'src/app/core/services/subset/subset.service';

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
    public subsetServices: SubsetService
  ) { 
    this.sectors = this.getSectors();
    this.sectorSelected = null;
  }

  ngOnInit(): void {
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
    console.log (this.sectorSelected);
  }

}
