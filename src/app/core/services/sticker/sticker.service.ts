import { Injectable } from '@angular/core';
import { Sector } from '../../models/sector-model';
import { Sticker } from '../../models/sticker-model';
import { SectorService } from '../sector/sector.service';
import { SubsetService } from '../subset/subset.service';


@Injectable({
  providedIn: 'root'
})
export class StickerService {

  public arraySticker: Sticker[] =[];
  public arrayStickerOfSector: Sticker[] =[];
  public sectorSelected: Sector;
  constructor(
    public subsetService: SubsetService,
    public sectorService: SectorService  
  ) { 
  }

  public getSector(sector: Sector){
    this.sectorSelected = sector;
    console.log(this.sectorSelected);
  }

  sendSticker(sticker: Sticker):void{
    for (let i=0; i<this.arraySticker.length; i++){
      if (this.arraySticker[i].sticker == sticker.sticker && this.arraySticker[i]._idSector == sticker._idSector){
        this.arraySticker[i].contador++;
        return;          
      }
    }
    this.arraySticker.push(sticker);
  }
  arraiSector(sec: Sector):Sticker[]{
    for(let i=0; i< this.arraySticker.length; i++){
      if(sec === null){
        console.log("salu¿oi");
        return;
      } 
      else{
        if(sec._id == this.arraySticker[i]._idSector){
          this.arrayStickerOfSector.push(this.arraySticker[i]);
        }
      }
    }
    console.log(this.arrayStickerOfSector);
    return this.arrayStickerOfSector;
  }

  deleteSticker(sticker:string){
    for (let i=0; i<this.arraySticker.length; i++){
      if (this.arraySticker[i].sticker == sticker && this.arraySticker[i].contador == 1){
        this.arraySticker.splice(i,1);
      }
    }
  }

  deleteAllStickersOfSector(){
    for (let i=0; i<this.arraySticker.length;i++){
      if(this.sectorSelected._id == this.arraySticker[i]._idSector){
        this.arraySticker.splice(i,1);
      }
    }
    console.log(this.arraySticker);
  }
}

