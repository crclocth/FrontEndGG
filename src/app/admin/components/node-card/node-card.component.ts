import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Node } from 'src/app/core/models/node-model';
import { Sensor } from 'src/app/core/models/sensor-model';
import { SensorProviderService } from 'src/app/core/providers/sensor/sensor-provider.service';

@Component({
  selector: 'app-node-card',
  templateUrl: './node-card.component.html',
  styleUrls: ['./node-card.component.less']
})
export class NodeCardComponent implements OnInit {

  @Input() node: Node;
  public sensors$: Observable<Sensor[]>;
  
  constructor(
    private sensorProvider: SensorProviderService
  ) { }

  ngOnInit(): void {
    this.sensors$ = this.sensorProvider.getAllUserNodeSensor(this.node._id);
  }

  public getSensorType(type: string): string | null{
    switch (type) {
      case 'temperature':
        return 'Temperatura del Aire';

      case 'humidity':
        return 'Humedad del Aire';

      case 'pressure':
        return 'Presión del Aire';

      case 'pondtemperature':
        return 'Temperatura de Pozo';

      case 'watertemperature':
        return 'Temperatura del Agua';

      case 'soiltemperature':
        return 'Temperatura de Suelo';

      case 'soilhumidity':
        return 'Humedad de Suelo';

      case 'waterlevel':
        return 'Nivel de Estanque';

      case 'current':
        return 'Corriente Eléctrica';

      case 'waterflow':
        return 'Caudal Agua';

      case 'airflow':
        return 'Caudal Viento';

      default:
        return null;
    }
  }

}
