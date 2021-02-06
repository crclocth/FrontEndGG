import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from 'src/app/core/models/sensor-model';

@Component({
  selector: 'app-sensor-card-item',
  templateUrl: './sensor-card-item.component.html',
  styleUrls: ['./sensor-card-item.component.less']
})
export class SensorCardItemComponent implements OnInit {

  @Input() sensor: Sensor;
  @Input() sectorId: string;

  constructor() { }

  ngOnInit(): void {
  }

}
