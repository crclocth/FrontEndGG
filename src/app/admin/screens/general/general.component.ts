import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { SectorService } from 'src/app/core/services/sector/sector.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.less']
})
export class GeneralComponent implements OnInit {

  public sectors: Sector[];
  public opcion: string = '2';

  constructor(
    private sectorServices: SectorService
  ) { 
    this.sectors = this.getSectors();
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


}
