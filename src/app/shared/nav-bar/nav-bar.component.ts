import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Node } from 'src/app/core/models/node-model';
import { Sector } from 'src/app/core/models/sector-model';
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

  constructor(
    private sectorServices: SectorService,
    private nodeService: NodeService,
    private router: Router
  ) { 
    this.sectors = this.getSectors();
    this.nodes = this.getNodes();
  }

  ngOnInit(): void {
  }

  getSectors(): Sector[]{
    return this.sectorServices.getAllSectors();
  }

  getNodes(): Node[]{
    return this.postNode();
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
