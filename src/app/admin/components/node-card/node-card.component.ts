import { Component, Input, OnInit } from '@angular/core';
import { Node } from 'src/app/core/models/node-model';
import { Sensor } from 'src/app/core/models/sensor-model';
import { SensorService } from 'src/app/core/services/sensor/sensor.service';

@Component({
  selector: 'app-node-card',
  templateUrl: './node-card.component.html',
  styleUrls: ['./node-card.component.less']
})
export class NodeCardComponent implements OnInit {

  @Input() node: Node;
  
  constructor() { }

  ngOnInit(): void {
  }

}
