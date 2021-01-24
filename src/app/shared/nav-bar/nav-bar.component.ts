import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { SectorService } from 'src/app/core/services/sector/sector.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  public sectors: Sector[] = [];
  public tamano: number;

  constructor(
    private sectorServices: SectorService
  ) { 
    this.sectors = this.getSectors();
    this.tamano = this.getTamano();
  }

  ngOnInit(): void {
  }

  getSectors(): Sector[]{
    return this.sectorServices.getAllSectors();
  }

  getTamano(): number{
    return this.sectorServices.getTamanio();
  }

}
