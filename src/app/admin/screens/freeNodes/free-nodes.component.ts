import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  public nodes$: Observable<Node[]>;
  public freeNodes: Observable<Node[]>;

  constructor(
    private nodeProvider: NodeProviderService,
    private router: Router
  ) { 
    this.nodes$ =  this.nodeProvider.getAllUserNodes();
    this.freeNodes = this.nodeProvider.getAllFreeNodes();
  }

  ngOnInit(): void {
    
  }

  go() {
    this.router.navigate(["admin/nodes"]);
  }

  goFree() {
    this.router.navigate(["admin/freeNodes"]);
  }
}
