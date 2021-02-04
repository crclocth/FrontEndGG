import { Injectable, EventEmitter } from '@angular/core';
import { Sector } from '../../models/sector-model';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  public sectorsArray: Sector[] = [];
  public sectorSelected: Sector;

  constructor() { }
  deleteSector = new EventEmitter<any>(); 

  public random() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 9; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
  }

  public addSector (sector: Sector){
    sector.subsets = [];
    sector._id = this.random();
    for(let i=0; i<this.sectorsArray.length; i++){
      if (sector.name == this.sectorsArray[i].name)
        { return null; }
    }
    this.sectorsArray.push(sector);
    console.log("agregado", this.sectorsArray);
    return this.sectorsArray;
  }

  public getAllSectors(): Sector[]{
    return this.sectorsArray;
  }

  public getTamanio(): number{
    return this.sectorsArray.length;
  }

  
}
