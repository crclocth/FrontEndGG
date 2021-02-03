import { Component, Input, OnInit } from '@angular/core';
import { Sticker } from 'src/app/core/models/sticker-model';
import { StickerService } from 'src/app/core/services/sticker/sticker.service';

@Component({
  selector: 'app-sticker-button',
  templateUrl: './sticker-button.component.html',
  styleUrls: ['./sticker-button.component.less']
})
export class StickerButtonComponent implements OnInit {

  @Input() public sendSticker: Sticker;
  constructor(public stickerService: StickerService) { 
  }
  public color: string; 
  public colorretornado: string;

  ngOnInit(): void {
  }

  //public randomColor = Math.floor(Math.random()*16777215).toString(16);
  
  randomcolor(){
    this.color = Math.floor(Math.random()*16777215).toString(16);
    this.colorretornado = '#' + this.color;
    return this.colorretornado;
  }

  colorr = this.randomcolor();


  enviarSticker(){
    this.stickerService.senddSticker.emit(this.sendSticker.sticker);
  }
}
  //public buttonBgColor = ' #FF0000'
  //this.buttonBgColor= '#c20018'

