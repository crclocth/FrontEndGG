import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sub-sector',
  templateUrl: './sub-sector.component.html',
  styleUrls: ['./sub-sector.component.less']
})
export class SubSectorComponent implements OnInit {
  
  public opcion: string = "2";
  
  constructor() {
   }

  ngOnInit(): void {
  }

  setOptionn(num: string) {
    this.opcion = num;
  }
  switchOp(op: string){
    this.opcion = op;
  }
  

}
