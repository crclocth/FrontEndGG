import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Node } from 'src/app/core/models/node-model';
import { NodeProviderService } from 'src/app/core/providers/node/node-provider.service';
import { NodeService } from 'src/app/core/services/node/node.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';

@Component({
  selector: 'app-free-nodes',
  templateUrl: './free-nodes.component.html',
  styleUrls: ['./free-nodes.component.less']
})
export class FreeNodesComponent implements OnInit {

  public nodes$: Node[] = [];
  public nodes: Node[] = [];
  public nodesArray: Node[] = [];
  public nodesCount: any;
  newNode: Node = null;

  constructor(
    private nodeService: NodeService,
    private notificationService: NotificationService,
    private nodeProvider: NodeProviderService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.nodes$ = await this.getNodes();
    this.nodes = await this.getFreeNodes();
  }

  async getNodes(){
    return await this.nodeProvider.getAllUserNodes();
  }

  go() {
    this.router.navigate(["admin/nodes"]);
  }

  goFree() {
    this.router.navigate(["admin/freeNodes"]);
  }

  async getFreeNodes(){
    return await this.nodeProvider.getAllFreeNodes();
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
