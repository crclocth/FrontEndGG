import { Injectable, EventEmitter } from '@angular/core';
import { Sector } from '../../models/sector-model';
import { Subset } from '../../models/subset-model';
import { SectorService } from '../sector/sector.service';

@Injectable({
  providedIn: 'root'
})
export class SubsetService {

  public subSetsArray: Subset[] = [];
  public sectorSelected: Sector;
  public selectedSubset: Subset;
  
  constructor(private sectorService: SectorService) { 
    this.sectorSelected = null;
  }

  deleteSubset = new EventEmitter<any>();

  public random() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 9; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
  }

  public addSubset(subset: Subset) {
    subset._id = this.random();
    for(let i=0; i<this.subSetsArray.length; i++){
      if (subset.subsetName == this.subSetsArray[i].subsetName)
        { return null; }
    }
    //this.subSetsArray.push(subset);
    //this.sectorSelected.subsets.push(subset);
    return subset;
  }

  public subsetSelected(subset : Subset){
    this.selectedSubset = subset;
    console.log(this.selectedSubset);
  }

  public getSector(sector: Sector){
    this.sectorSelected = sector;
    console.log(this.sectorSelected);
  }

  public getAllSubsets (): Subset [] {
    if (this.sectorSelected === null)
      { return this.subSetsArray; }
    console.log(this.sectorSelected.subsets);
    return this.sectorSelected.subsets;
  }

  public getTamanio(): number{
    return this.subSetsArray.length;
  }
  

}
