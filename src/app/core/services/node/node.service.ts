import { Injectable } from '@angular/core';
import { Node } from '../../models/node-model';
import { SensorService } from '../sensor/sensor.service';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  public nodesArray: Node[] = [];
  
  constructor(
    private sensorService: SensorService
  ) { }

  public random() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 9; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
  }

  public addNode (node: Node){
    node._id = this.random();
    node.sensors = [];
    for(let i=0; i<this.nodesArray.length; i++){
      if (node.nodeName == this.nodesArray[i].nodeName)
        { return null; }
    }
    this.nodesArray.push(node);
    return this.nodesArray;
  }

  public getAllNodes(): Node[]{
    return this.nodesArray;
  }

  public getTamanio(): number{
    return this.nodesArray.length;
  }
}
