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
      etiqueta: new FormControl('', [Validators.required]),
      
    });
  }
  onSubmit(){
    this.mensaje="Datos completados correctamente";
    this.isDivVisible=true;
  }
  get etiqueta() { return this.checkoutForm.get('etiqueta')?.value;}
  public postDogs(){ 
    let datosForm:  = {
      etiqueta: this.checkoutForm.get('etiqueta')?.value,
      
    }
    console.log(datosForm);
    try {
      console.log('hola');
      //this.DogsService.poblar(datosForm);
      console.log( this.DogsService.poblar(datosForm));
      alert('Su perro se agrego correctamente');
    } catch (error) {
      alert('Su perro no pudo ser agregado');
      
    }
  }
}
