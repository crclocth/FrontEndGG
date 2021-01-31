import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Node } from 'src/app/core/models/node-model';
import { Sector } from 'src/app/core/models/sector-model';
import { NodeProviderService } from 'src/app/core/providers/node/node-provider.service';
import { NodeService } from 'src/app/core/services/node/node.service';
import { SectorService } from 'src/app/core/services/sector/sector.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  public sectors: Sector[] = [];
  public nodes: Node[] = [];
  public nodes$: Node[];
  public opcion: number = 1;

  constructor(
    private sectorServices: SectorService,
    private nodeService: NodeService,
    private router: Router,
    private nodeProvider: NodeProviderService
  ) { 
    this.sectors = this.getSectors();
  }

  async ngOnInit(): Promise<void>{
    this.nodes$ = await this.getNodes();
    this.nodes = await this.getFreeNodes();
  }

  getSectors(): Sector[]{
    return this.sectorServices.getAllSectors();
  }

  getNodes() {
    return this.nodeProvider.getAllUserNodes();
  }

  getFreeNodes() {
    return this.nodeProvider.getAllFreeNodes();
  }

  getRuta(): string{
    return this.router.url;
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
  }
 

}
