import { Injectable } from '@angular/core';
import { Sector } from '../../models/sector-model';
import { Subset } from '../../models/subset-model';

@Injectable({
  providedIn: 'root'
})
export class SubsetService {

  private sectorSelected: Sector;

  constructor() { }

  public addSubset (subset: Subset){
    console.log(this.sectorSelected);
    this.sectorSelected.subsets.push(subset);
    return subset;
  }

  public getSector(sector: Sector){
    this.sectorSelected = sector;
    console.log (this.sectorSelected);
  }

}
