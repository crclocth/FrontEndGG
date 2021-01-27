import { Component, OnInit } from '@angular/core';
import { Node } from 'src/app/core/models/node-model';
import { Sensor } from 'src/app/core/models/sensor-model';
import { NodeService } from 'src/app/core/services/node/node.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.less']
})
export class NodesComponent implements OnInit {

  public nodes: Node[] = [];
  newNode: Node = null;

  constructor(
    private nodeService: NodeService,
    private notificationService: NotificationService
  ) { 
    this.nodes = this.getNodes();
  }

  ngOnInit(): void {
  }

  getNodes(): Node[]{
    return this.postNode();
  }

  public postNode(): Node[]{ 
    let id: string = this.nodeService.random();
    this.nodes = [
      {
        _id: id,
        nodeName: 'Nodo 001',
        nodeState: 'perfect',
        sensors: [
          {
            nodeId: id,
            sensorState: 'danger',
            sensorName: 'Temperatura aerea',
          },
          {
            nodeId: id,
            sensorState: 'warning',
            sensorName: 'Humedad aerea',
          },
          {
            nodeId: id,
            sensorState: 'perfect',
            sensorName: 'Humedad del suelo',
          },
          {
            nodeId: id,
            sensorState: 'warning',
            sensorName: 'Temperatura del suelo',
          },
        ]
      },
      {
        _id: id,
        nodeName: 'Nodo 002',
        nodeState: 'warning',
        sensors: [
          {
            nodeId: id,
            sensorState: 'warning',
            sensorName: 'Temperatura aerea',
          },
          {
            nodeId: id,
            sensorState: 'danger',
            sensorName: 'Humedad aerea',
          },
          {
            nodeId: id,
            sensorState: 'perfect',
            sensorName: 'Humedad del suelo',
          },
          {
            nodeId: id,
            sensorState: 'perfect',
            sensorName: 'Temperatura del suelo',
          },
        ]
      },
      {
        _id: id,
        nodeName: 'Nodo 003',
        nodeState: 'warning',
        sensors: [
          {
            nodeId: id,
            sensorState: 'perfect',
            sensorName: 'Temperatura aerea',
          },
          {
            nodeId: id,
            sensorState: 'warning',
            sensorName: 'Humedad aerea',
          },
          {
            nodeId: id,
            sensorState: 'perfect',
            sensorName: 'Humedad del suelo',
          },
          {
            nodeId: id,
            sensorState: 'danger',
            sensorName: 'Temperatura del suelo',
          },
        ]
      },
      {
        _id: id,
        nodeName: 'Nodo 004',
        nodeState: 'perfect',
        sensors: [
          {
            nodeId: id,
            sensorState: 'warning',
            sensorName: 'Temperatura aerea',
          },
          {
            nodeId: id,
            sensorState: 'perfect',
            sensorName: 'Humedad aerea',
          },
          {
            nodeId: id,
            sensorState: 'perfect',
            sensorName: 'Humedad del suelo',
          },
          {
            nodeId: id,
            sensorState: 'danger',
            sensorName: 'Temperatura del suelo',
          },
        ]
      },
    ];
    return this.nodes;
    try {
      if (this.nodeService.addNode(this.newNode) == null)
        { this.notificationService.error('Ya existe este Sector!'); return;}
      this.nodeService.addNode(this.newNode);
      this.notificationService.success('Su sector ha sido agregado!');
    } catch (error) {
      this.notificationService.error('Error al agregar su sector');
    }
  }
}
