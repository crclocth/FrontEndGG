import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
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
  public moment: number;
  public sensors$: Observable<Sensor[]>;
  public sensor: Sensor;
  
  constructor(
    private sensorProvider: SensorProviderService
  ) { 
    this.sensor = null;
    this.moment = 0;
  }

  ngOnInit(): void {
    this.sensors$ = this.sensorProvider.getAllUserNodeSensor(this.node._id);
    this.moment = moment().seconds()
  }

  public getSensorType(type: string): string | null{
    switch (type) {
      case 'temperature':
        return 'Temperatura del Aire';

      case 'humidity':
        return 'Humedad del Aire';

      case 'pressure':
        return 'Presión del Aire';

      case ('pondTemperature'):
        return 'Temperatura de Pozo';
      
          case ('pondtemperature'):
            return 'Temperatura de Pozo';

      case ('waterTemperature'):
        return 'Temperatura del Agua';
      
          case ('watertemperature'):
            return 'Temperatura del Agua';

      case ('soilTemperature'):
        return 'Temperatura de Suelo';
      
          case ('soiltemperature'):
            return 'Temperatura de Suelo';

      case ('soilHumidity'):
        return 'Humedad de Suelo';

          case ('soilhumidity'):
            return 'Humedad de Suelo';

      case ('waterLevel'):
        return 'Nivel de Estanque';

          case ('waterlevel'):
            return 'Nivel de Estanque';

      case 'current':
        return 'Corriente Eléctrica';

      case ('waterflow'):
        return 'Caudal Agua';

          case ('waterFlow'):
            return 'Caudal Agua';

      case ('airflow'):
        return 'Caudal Viento';

          case ('airFlow'):
            return 'Caudal Viento';

      default:
        return 'Tipo no definido';
    }
  }

}
