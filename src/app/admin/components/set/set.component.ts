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
  public subsetLength: number;
  
  constructor(
    private subsetService: SubsetService
  ) {
    this.subSets = this.getSubSets();
  }

  ngOnInit(): void {
  }

  getSubSets(): Subset[]{
    return this.subsetService.getAllSubsets();
  }

}
