import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Node } from '../../models/node-model';
import { Sensor } from '../../models/sensor-model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NodeProviderService {

  constructor(private httpService: HttpService) { }

  public getAllUserNodes(): Observable<Node[]> {
    return this.httpService.get<Node[]>('/node/all');
  };

  public getAllFreeNodes(): Observable<Node[]> {
    return this.httpService.get<Node[]>('/unassigned/td');
  };

  public getAllUserNodeSensor(nodeId: string): Observable<Sensor[]> {
    return this.httpService.get<Sensor[]>('/sensor/all/' + nodeId);
  };
}
