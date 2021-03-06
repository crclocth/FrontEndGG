import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { Subset } from 'src/app/core/models/subset-model';
import { StickerService } from 'src/app/core/services/sticker/sticker.service';
import { SubsetService } from 'src/app/core/services/subset/subset.service';
import { SectorService } from '../../../core/services/sector/sector.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.less']
})
export class SetComponent implements OnInit, OnChanges{

  @Input() sector: Sector;
  

  public sectorSelected: string;
  public subSets: Subset[];
  public opcion: string;
  
  constructor(
    private subsetService: SubsetService,
    public stickerService: StickerService,
    private sectorService: SectorService,
  ) {
    this.sector = null;
    this.subSets = [];
    this.opcion = '2'; 
    this.subSets = this.getSubSets();
  }

  ngOnInit(): void {
    this.sectorSelected = this.sector._id;
    
    this.subsetService.deleteSubset.subscribe( () => {
    this.deleteSubset();
    });
    this.sectorService.deleteSector.subscribe( () => {
      this.deleteAllSubsetOfSector();
    });

  }
  
  ngOnChanges():void{
    this.subSets = this.getSubSets();
  }

  getSubSets(): Subset[]{
    console.log(this.subsetService.getAllSubsets());
    return this.subsetService.getAllSubsets();
  }

  addNewSubset(subset: Subset):void{
    if (this.sector._id == subset.sectorId){
      this.subSets.push(subset);
      console.log(this.subSets);
    }
  }
  
  deleteSubset(){
    console.log(this.subsetService.selectedSubset);
    for (let i=0; i<this.subSets.length; i++){
      if (this.subSets[i].subsetName == this.subsetService.selectedSubset.subsetName){
        this.stickerService.deleteSticker(this.subSets[i].sticker);
        this.subSets.splice(i,1);
      }
    }
  }

  deleteAllSubsetOfSector(){
    for(let i=0;i<this.subSets.length;i++){
      if(this.subSets[i].sectorId == this.subsetService.sectorSelected._id){
        this.subSets.splice(i,1);
      }
    }
  }
  setOption(num:string){
    this.opcion=num;
  }

  switchOption(num:string){
    this.opcion = num;
  }
}
