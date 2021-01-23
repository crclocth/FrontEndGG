import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { Sector } from 'src/app/core/models/sector-model';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { SectorService } from 'src/app/core/services/sector/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.less']
})
export class SectorComponent implements OnInit {

  @Output() switch: EventEmitter<string>;

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  newSector: Sector = null;

  constructor(
    private notificationServices: NotificationService,
    private SectorService: SectorService
  ) {
    this.checkoutForm = this.createFormGroup();
    this.switch = new EventEmitter<string>();
  }

  ngOnInit() {
  }
  
  createFormGroup() {
    return new FormGroup({
      nombreSector: new FormControl('', [Validators.required]),
    });
  }

  enviar() {
    this.switch.emit('2');
  }

  get nombreSector() { return this.checkoutForm.get('nombreSector')?.value;}

  public postSector(){ 
    let datosForm: string = this.checkoutForm.get('nombreSector')?.value;
    this.newSector = {name: datosForm, subsets: []}
    try {
      if (this.SectorService.addSector(this.newSector) == null)
        { this.notificationServices.error('Ya existe este Sector!'); }
      this.SectorService.addSector(this.newSector);
      this.notificationServices.success('Su sector ha sido agregado!');
    } catch (error) {
      this.notificationServices.error('Error al agregar su sector');
    }
  }
}
