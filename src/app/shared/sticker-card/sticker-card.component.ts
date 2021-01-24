import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticker-card',
  templateUrl: './sticker-card.component.html',
  styleUrls: ['./sticker-card.component.less']
})
export class StickerCardComponent implements OnInit {
  
  public randomColor = Math.floor(Math.random()*16777215).toString(16);
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
