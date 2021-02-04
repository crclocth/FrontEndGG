import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SubsetService } from 'src/app/core/services/subset/subset.service';


@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.less']
})
export class DeleteCardComponent implements OnInit {

  @Input() nameSector:string;
  @Input() nameSubset:string;
  @Output() opcion$: EventEmitter<string>; 
  
  @Input() opcion: number;
  
  constructor(
    private subsetService: SubsetService,
  ) { 
    this.opcion$ = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  buttonDeletePressed(){
    this.subsetService.deleteSubset.emit();
  }
  enviar(){
    this.opcion$.emit('2');
  }
  
}
