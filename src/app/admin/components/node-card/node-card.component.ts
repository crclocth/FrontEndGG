import { Component, Input, OnInit } from '@angular/core';
import { Node } from 'src/app/core/models/node-model';
import { Sensor } from 'src/app/core/models/sensor-model';

@Component({
  selector: 'app-node-card',
  templateUrl: './node-card.component.html',
  styleUrls: ['./node-card.component.less']
})
export class NodeCardComponent implements OnInit {

  @Input() node: Node;
  
  public sensors: Sensor[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getSensors(): Sensor[]{
    for (let i = 0; i < this.node.sensors.length; i++) {
      this.sensors[i] = this.node.sensors[i];
    }
    return this.sensors;
  }
}
