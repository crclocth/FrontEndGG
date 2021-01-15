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
    console.log(this.opcion);
    this.opcion = num;
    console.log(this.opcion);
  }

}
