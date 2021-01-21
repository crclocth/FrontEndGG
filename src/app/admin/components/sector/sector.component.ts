import { Component, OnInit } from '@angular/core';
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

  onSubmit(){
    this.mensaje="Datos completados correctamente";
    this.isDivVisible=true;
  }

  get nombreSector() { return this.checkoutForm.get('nombreSector')?.value;}

  public postSector(){ 
    let datosForm: Sector = this.checkoutForm.get('nombreSector')?.value;
    console.log(datosForm);
    try {
      this.SectorService.addSector(datosForm);
      this.notificationServices.success('Su sector ha sido agregado!');
    } catch (error) {
      this.notificationServices.error('Error al agregar su sector');
    }
  }
}
