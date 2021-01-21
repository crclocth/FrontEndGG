import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-set',
  templateUrl: './sub-set.component.html',
  styleUrls: ['./sub-set.component.less']
})
export class SubSetComponent implements OnInit {

  public opcion: number = 2;
  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  constructor() {
    this.checkoutForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  setOptionn(num: number) {
    this.opcion = num;
  }
  createFormGroup() {
    return new FormGroup({
      nombreperro: new FormControl('', [Validators.required]),
      nombreduenno: new FormControl('', [Validators.required]),
      razaa: new FormControl('',[Validators.required]),
    });
  }
  onSubmit(){
    this.mensaje="Datos completados correctamente";
    this.isDivVisible=true;
  }

}
