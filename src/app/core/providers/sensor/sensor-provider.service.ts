import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sensor } from '../../models/sensor-model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SensorProviderService {

  constructor(private httpService: HttpService) { }

  public getAllUserSensors(): Observable<Sensor[]>{
    return this.httpService.get<Sensor[]>('sensor/all');
  };
  
  public getAllUserNodeSensor(nodeId: string): Observable<Sensor[]> {
    return this.httpService.get<Sensor[]>('/sensor/all/' + nodeId);
  };
}
