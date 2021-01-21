import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.less']
})
export class GeneralComponent implements OnInit {

  public opcion: string = '2';

  constructor() { }

  ngOnInit(): void {
  }

  setOption(num: string) {
    this.opcion = num;
  }
  
  switchOp(op: string){
    console.log(op);
    this.opcion = op;
    console.log(this.opcion);
  }


}
