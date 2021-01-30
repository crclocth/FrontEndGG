import { Injectable } from '@angular/core';
import { Sector } from '../../models/sector-model';
import { Sticker } from '../../models/sticker-model';
import { SubsetService } from '../subset/subset.service';


@Injectable({
  providedIn: 'root'
})
export class StickerService {

  public arraySticker: Sticker[] =[];
  public arrayStickerOfSector: Sticker[] =[];
  constructor(public subsetService: SubsetService) { 

  }
  sendSticker(sticker: Sticker):void{
    for (let i=0; i<this.arraySticker.length; i++){
      if (this.arraySticker[i].sticker == sticker.sticker && this.arraySticker[i]._idSector == sticker._idSector){
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
}