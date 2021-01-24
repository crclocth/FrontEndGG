import { Component, Input, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';
import { Subset } from 'src/app/core/models/subset-model';
import { SectorService } from 'src/app/core/services/sector/sector.service';
import { SubsetService } from 'src/app/core/services/subset/subset.service';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.less']
})
export class SetComponent implements OnInit {

  @Input() sector: Sector = null;

  public subSets: Subset[];
  
  constructor(
    public subsetService: SubsetService,
  ) {
    this.subSets = this.subsetService.getAllSubsets();
  }

  ngOnInit(): void {
  }

  getSubSets(): Subset[]{
    console.log(this.subsetService.getAllSubsets());
    return this.subsetService.getAllSubsets();
  }

}
