import { Injectable } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { SensorProviderService } from '../../providers/sensor/sensor-provider.service';
import { Sensor } from '../../models/sensor-model';
import { Observable } from 'rxjs';
import { Node } from '../../models/node-model';
import { NodeProviderService } from '../../providers/node/node-provider.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {

  public drag: Sensor[];
  public drop: Sensor[];
  public nodes$: Observable<Node[]>;
  public nodes: Node[];
  public nodesFree$: Observable<Node[]>;
  public nodesFree: Node[];

  constructor(
    private sensorProvider: SensorProviderService,
    private nodeProvider: NodeProviderService,
    private router: Router
  ){ 
    this.nodes$ = this.nodeProvider.getAllUserNodes();
    //this.nodes = this.setNodes(); 
    this.nodesFree$ = this.nodeProvider.getAllFreeNodes();
    //this.nodesFree = this.setFree();
  }

  setDrag(id: string): Sensor[] {
    let dragAux: Sensor[] = [];
    let route = this.router.url;
    if (route === '/admin/nodes') {
      for (let i = 0; i < this.nodes.length; i++) {
        //dragAux[i] = this.sensorProvider.getAllUserNodeSensor(id);
      };
    }
    else {
      if (route === '/admin/freeNodes') {
        for (let i = 0; i < this.nodesFree.length; i++) {
          //dragAux[i] = this.sensorProvider.getAllUserNodeSensor(id);
        };
      }
    }
    this.drag = dragAux;
    return this.drag;
  }

  setDrop() {
    return (this.drop = null);
  }

  /*setNodes(): Node[] {
    for (let i = 0; i < this.nodes$;i++){
      // Transformar observables en Tipo Node
    }
    return this.nodes;
  }*/

  /*setFree(): Node[] {
    for (let i = 0; i < this.nodesFree$;i++){
      
    }
    return this.nodesFree;
  }*/

  Drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
