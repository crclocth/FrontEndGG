import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subset-set',
  templateUrl: './subset-set.component.html',
  styleUrls: ['./subset-set.component.less']
})
export class SubsetSetComponent implements OnInit {

  @Input() subsector: string;
  constructor() { }

  ngOnInit(): void {
  }

}
