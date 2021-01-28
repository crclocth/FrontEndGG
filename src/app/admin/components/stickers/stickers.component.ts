import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.less']
})
export class StickersComponent implements OnInit {

  @Input() stickerrr: string;
  constructor() { }

  ngOnInit(): void {
  }

}
