import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-set',
  templateUrl: './sub-set.component.html',
  styleUrls: ['./sub-set.component.less']
})
export class SubSetComponent implements OnInit {

  public opcion: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  setOptionn(num: number) {
    this.opcion = num;
  }


}
