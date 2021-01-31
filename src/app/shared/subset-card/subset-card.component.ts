import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subset } from 'src/app/core/models/subset-model';
import { SubsetService } from 'src/app/core/services/subset/subset.service';
import { NotificationService } from '../../core/services/notification/notification.service';
import { Sector } from '../../core/models/sector-model';
import { StickerService } from 'src/app/core/services/sticker/sticker.service';
import { Sticker } from 'src/app/core/models/sticker-model';


@Component({
  selector: 'app-subset-card',
  templateUrl: './subset-card.component.html',
  styleUrls: ['./subset-card.component.less']
})
export class SubsetCardComponent implements OnInit {

  @Output() switch: EventEmitter<string>;
  @Output() subsetEmitter: EventEmitter<Subset>;
  @Input() sector: Sector;
  public opcion: number = 2;
  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  newSubset: Subset = null;
  public newSticker: Sticker;

  constructor(
    private SubsetService: SubsetService,
    private NotificationService: NotificationService,
    private StickerService: StickerService,
  ) {
    this.checkoutForm = this.createFormGroup();
    this.switch = new EventEmitter<string>();
    this.subsetEmitter = new EventEmitter<Subset>();
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
  
  //get sticker() { return this.checkoutForm.get('sticker')?.value;}
  get sticker() { return this.checkoutForm.get('sticker')}
  get subsetName() { return this.checkoutForm.get('subsetName')?.value;}
  
  public postSubset(){ 
    let datosForm: Subset = {
      sticker: this.sticker.value.trim(),
      //sticker: this.checkoutForm.get('sticker')?.value,
      subsetName:  this.checkoutForm.get('subsetName')?.value,
      sectorId: this.sector._id
    }
    this.newSubset = datosForm;
    this.newSubset.subsetName = this.newSubset.subsetName.trim();
    try {
      if (this.SubsetService.addSubset(this.newSubset) == null)
        { this.NotificationService.error('Ya existe este Sub sector!'); return;}
      this.SubsetService.addSubset(datosForm);
      
      this.newSticker= {_idSector : datosForm.sectorId, sticker : datosForm.sticker, contador:1};
      this.StickerService.sendSticker(this.newSticker);

      this.NotificationService.success('Su Subsector se agrego correctamente');
      this.subsetEmitter.emit(this.newSubset);
    } catch (error) {
      this.NotificationService.error('Su Subsector no pudo ser agregado');
    }
    console.log(datosForm.sticker);
  }

}
