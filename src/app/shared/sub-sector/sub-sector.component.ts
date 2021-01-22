import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subset } from 'src/app/core/models/subset-model';
import { SubsetService } from 'src/app/core/services/subset/subset.service';


@Component({
  selector: 'app-sub-sector',
  templateUrl: './sub-sector.component.html',
  styleUrls: ['./sub-sector.component.less']
})
export class SubSectorComponent implements OnInit {
  
  public subsectors: Subset[] = [];
  public opcion: string = "2";
  
  constructor(
    private subsetServices: SubsetService
  ) {
    this.subsectors = this.getSubSectors();
   }

  ngOnInit(): void {
  }

  setOptionn(num: string) {
    this.opcion = num;
  }
  switchOp(op: string){
    this.opcion = op;
  }
  getSubSectors(): Subset[]{
    return this.subsetServices.getAllSubsets();
  }
}
