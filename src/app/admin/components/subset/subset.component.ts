import { Component, Input, OnInit } from '@angular/core';
import { Subset } from 'src/app/core/models/subset-model';

@Component({
  selector: 'app-subset',
  templateUrl: './subset.component.html',
  styleUrls: ['./subset.component.less']
})
export class SubsetComponent implements OnInit {

  @Input() subset: Subset;

  constructor() { }

  ngOnInit(): void {
  }

}
