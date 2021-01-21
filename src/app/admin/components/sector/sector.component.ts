import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'events';
import { Sector } from 'src/app/core/models/sector-model';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { SectorService } from 'src/app/core/services/sector/sector.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.less']
})
export class SectorComponent implements OnInit {

  @Output() switch = new EventEmitter();

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;

  constructor(
    private notificationServices: NotificationService,
    private SectorService: SectorService
  ) {
    this.checkoutForm = this.createFormGroup();
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
    let datosForm: Sector = this.checkoutForm.get('nombreSector')?.value;
    console.log(datosForm);
    try {
      this.SectorService.addSector(datosForm);
      this.enviar();
      this.notificationServices.success('Su sector ha sido agregado!');
    } catch (error) {
      this.notificationServices.error('Error al agregar su sector');
    }
  }
}
