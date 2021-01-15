import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.less']
})
export class GeneralComponent implements OnInit {

  public opcion: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  setOption(num: number) {
    this.opcion = num;
  }

}
