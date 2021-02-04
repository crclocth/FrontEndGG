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

  constructor(
    private subsetService: SubsetService
  ) {}

  ngOnInit(): void {
  }

  subsetSelected(){
    this.subsetService.subsetSelected(this.subset);
  }

}
