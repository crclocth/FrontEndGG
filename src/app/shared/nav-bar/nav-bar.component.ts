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
    private nodesServices: NodeService,
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
    return this.nodesServices.getAllNodes();
  }

  getRuta(): string{
    return this.router.url;
  }

}
