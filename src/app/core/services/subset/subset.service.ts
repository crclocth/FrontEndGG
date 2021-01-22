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
    this.sectorSelected.subsets.push(subset);
    return subset;
  }

  public getSector(sector: Sector){
    this.sectorSelected = sector;
  }

  public getAllSubsets (): Subset [] {
    if (this.sectorSelected)
    {
      return this.sectorSelected.subsets;
    }
    else
    return null;
  }

}
