import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from 'src/app/core/models/sensor-model';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.less']
})
export class SensorCardComponent implements OnInit {

  @Input() sensor: Sensor;
  @Input() sectorId: string;

  constructor() {}

  ngOnInit(): void {
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
