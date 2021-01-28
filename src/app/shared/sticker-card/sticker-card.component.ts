import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticker-card',
  templateUrl: './sticker-card.component.html',
  styleUrls: ['./sticker-card.component.less']
})
export class StickerCardComponent implements OnInit {

  public  miarray: string[] = ["cama caliente","hola","casa","tele"];
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
  
}
