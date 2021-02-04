import { Component, Input, OnInit } from '@angular/core';
import { Subset } from 'src/app/core/models/subset-model';
import { SubsetService } from '../../../core/services/subset/subset.service';

declare var $:any;

@Component({
  selector: 'app-subset',
  templateUrl: './subset.component.html',
  styleUrls: ['./subset.component.less']
})
export class SubsetComponent implements OnInit {

  @Input() subset: Subset;
  public modal:any;
  public opcion: string;

  constructor(
    public subsetService: SubsetService
  ) {
    this.opcion = '2';
  }

  ngOnInit(): void {
  }

  subsetSelected(){
    this.subsetService.subsetSelected(this.subset);
  }

  setOption(num:string){
    this.opcion=num;
  }
  buttonDeletePressed(){
    this.subsetService.deleteSubset.emit();
  }
  switchOption(num:string){
    this.opcion = num;
  }
}
