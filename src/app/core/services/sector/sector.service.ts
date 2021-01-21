import { Injectable } from '@angular/core';
import { Sector } from '../../models/sector-model';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private sectorsArray: Sector[] = [];

  constructor(sector: Sector) { }

  public addSector (sector: Sector){
    this.sectorsArray.push(sector);
    return this.sectorsArray;
  }

  public getAllSectors(): Sector[]{
    return this.sectorsArray;
  }
}
