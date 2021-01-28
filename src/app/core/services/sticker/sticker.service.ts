import { Injectable } from '@angular/core';
import { Sticker } from '../../models/sticker-model';


@Injectable({
  providedIn: 'root'
})
export class StickerService {

  public arraySticker: Sticker[] =[];
  constructor() { 

  }
  sendSticker(sticker: Sticker):void{
    for (let i=0; i<this.arraySticker.length; i++){
      if (this.arraySticker[i].sticker == sticker.sticker && this.arraySticker[i]._idSector == sticker._idSector){
        return;          
      }
    }
    this.arraySticker.push(sticker);
  }
}
