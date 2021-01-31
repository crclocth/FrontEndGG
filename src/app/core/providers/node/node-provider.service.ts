import { Injectable } from '@angular/core';
import { Node } from '../../models/node-model';
import { Sensor } from '../../models/sensor-model';
import { HttpService } from '../../services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NodeProviderService {

  constructor(private httpService: HttpService) { }

  public getAllUserNodes(): Promise<Node[]> {
    return this.httpService.get<Node[]>('/node/all')
      .toPromise();
  };

  public getAllFreeNodes(): Promise<Node[]> {
    return this.httpService.get<Node[]>('/node/unassigned/td')
      .toPromise();
  };

  public getAllUserNodeSensor(nodeId: string): Promise<Sensor[]> {
    return this.httpService.get<Sensor[]>('/sensor/all/' + nodeId)
      .toPromise();
  };

}
