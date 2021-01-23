import { Component, Input, OnInit } from '@angular/core';
import { Sector } from 'src/app/core/models/sector-model';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.less']
})
export class SetComponent implements OnInit {

  @Input() sector: Sector;
  
  constructor() { }

  ngOnInit(): void {
  }

}
