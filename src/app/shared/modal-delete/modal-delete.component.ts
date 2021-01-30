import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.less']
})
export class ModalDeleteComponent implements OnInit {

  public opcion: string = '2';
  constructor() { }

  ngOnInit(): void {
  }
  setOption(num: string) {
    this.opcion = num;
  }

}
