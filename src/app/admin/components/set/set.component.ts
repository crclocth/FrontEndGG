import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { Subset } from 'src/app/core/models/subset-model';
import { SectorService } from 'src/app/core/services/sector/sector.service';
import { SubsetService } from 'src/app/core/services/subset/subset.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.less']
})
export class SetComponent implements OnInit, OnChanges{

  @Input() sector: Sector = null;


  public subSets: Subset[] = [];
  
  constructor(
    public subsetService: SubsetService,
  ) {
    this.subSets = this.getSubSets();
  }

  ngOnInit(): void {
  }
  
  ngOnChanges():void{
    this.subSets = this.getSubSets();
    console.log("sdadsa");
  }

  getSubSets(): Subset[]{
    console.log(this.subsetService.getAllSubsets());
    return this.subsetService.getAllSubsets();
  }

  addNewSubset(subset: Subset):void{
    if (this.sector._id === subset.sectorId){
      this.subSets.push(subset);
      console.log(subset.sectorId);
    }
  }

}
