import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticker-button',
  templateUrl: './sticker-button.component.html',
  styleUrls: ['./sticker-button.component.less']
})
export class StickerButtonComponent implements OnInit {

  constructor() { }
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
}

  

  //public buttonBgColor = ' #FF0000'
  //this.buttonBgColor= '#c20018'

