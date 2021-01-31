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
  public freeNodes: Observable<Node[]>;
  public nodes$: Observable<Node[]>;
  public opcion: number = 1;

  constructor(
    private sectorServices: SectorService,
    private router: Router,
    private nodeProvider: NodeProviderService
  ) { 
    this.sectors = this.getSectors();
    this.nodes$ = this.nodeProvider.getAllUserNodes();
    this.freeNodes = this.nodeProvider.getAllFreeNodes();
  }

  ngOnInit(): void {
  }

  getSectors(): Sector[]{
    return this.sectorServices.getAllSectors();
  }

  getRuta(): string{
    return this.router.url;
  }
}
