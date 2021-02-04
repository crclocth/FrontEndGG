import { ThrowStmt } from '@angular/compiler';
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
  public moment: string;
  public momentNode: Moment;
  public sensors$: Observable<Sensor[]>;
  public sensor: Sensor;
  
  constructor(
    private sensorProvider: SensorProviderService
  ) { 
    this.sensor = null;
    this.moment = null;
    this.momentNode = null;
  }

  ngOnInit(): void {
    this.sensors$ = this.sensorProvider.getAllUserNodeSensor(this.node._id);
    console.log(this.moment = moment().local().format("LT"));
    console.log(this.momentNode = this.setMoment());
    //this.saberColor();
  }

  setMoment(): Moment{
    let momentAux = moment().set({
      'year': this.node.lastSync.getFullYear(),
      'month': this.node.lastSync.getMonth(),
      'date': this.node.lastSync.getDate(),
      'hour': this.node.lastSync.getHours(),
      'minute': this.node.lastSync.getMinutes(),
    })
    return momentAux;
  }

  /*saberColor() {
    if (this.moment > (this.momentNode + (4 * this.node?.ds))) {
      console.log('Inactive; gray');
    }
    else {
      if (this.moment > (this.momentNode + (3 * this.node?.ds))) {
        console.log('Danger active; red');
      }
      else {
        if (this.moment > (this.momentNode + (2 * this.node?.ds))) {
          console.log('Warning active; yellow');
        }
        else {
          console.log('Active; green');
        }
      }
    }
  }*/

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
