import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subset } from 'src/app/core/models/subset-model';
import { SubsetService } from 'src/app/core/services/subset/subset.service';
import { NotificationService } from '../../core/services/notification/notification.service';

@Component({
  selector: 'app-subset-card',
  templateUrl: './subset-card.component.html',
  styleUrls: ['./subset-card.component.less']
})
export class SubsetCardComponent implements OnInit {

  @Output() switch: EventEmitter<string>;
  public opcion: number = 2;
  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  newSubset: Subset = null;

  constructor(
    private SubsetService: SubsetService,
    private NotificationService: NotificationService,
  ) {
    this.checkoutForm = this.createFormGroup();
    this.switch = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  setOptionn(num: number) {
    this.opcion = num;
  }
  createFormGroup() {
    return new FormGroup({
      sticker: new FormControl('', [Validators.required]),
      subsetName: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(){
    this.mensaje="Datos completados correctamente";
    this.isDivVisible=true;
  }
  enviar() {
    this.switch.emit('2');
  }
  
  get sticker() { return this.checkoutForm.get('sticker')?.value;}
  //get sticker() { return this.checkoutForm.get('sticker')?.value;}
  get subsetName() { return this.checkoutForm.get('subsetName')?.value;}
  
  public postSubset(){ 
    let datosForm: Subset = {
      sticker: this.checkoutForm.get('sticker')?.value,
      subsetName:  this.checkoutForm.get('subsetName')?.value,
    }
    this.newSubset = datosForm;
    try {
      if (this.SubsetService.addSubset(this.newSubset) == null)
        { this.NotificationService.error('Ya existe este Sub sector!'); return;}
      this.SubsetService.addSubset(datosForm);
      this.NotificationService.success('Su Subsector se agrego correctamente');
    } catch (error) {
      this.NotificationService.error('Su Subsector no pudo ser agregado');
    }
  }


}
