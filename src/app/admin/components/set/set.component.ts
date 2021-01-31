import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { Subset } from 'src/app/core/models/subset-model';
import { StickerService } from 'src/app/core/services/sticker/sticker.service';
import { SubsetService } from 'src/app/core/services/subset/subset.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.less']
})
export class SetComponent implements OnInit, OnChanges{

  @Input() sector: Sector = null;

  public sectorSelected: string;
  public subSets: Subset[] = [];
  
  constructor(
    public subsetService: SubsetService,
    public stickerService: StickerService,
  ) {
    this.subSets = this.getSubSets();
  }

  ngOnInit(): void {
    this.sectorSelected = this.sector._id;
    this.subsetService.deleteSubset.subscribe( () => {
    this.deleteSubset();
    });
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
  
  deleteSubset(){
    for (let i=0; i<this.subSets.length; i++){
      if (this.subSets[i].subsetName == this.subsetService.selectedSubset.subsetName){
        this.stickerService.deleteSticker(this.subSets[i].sticker);
        this.subSets.splice(i,1);
      }
    }
  }
}
