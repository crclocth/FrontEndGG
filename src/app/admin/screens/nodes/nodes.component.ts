import { Component, OnInit } from '@angular/core';
import { Node } from 'src/app/core/models/node-model';
import { NodeService } from 'src/app/core/services/node/node.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.less']
})
export class NodesComponent implements OnInit {

  public nodes: Node[] = [];

  constructor(
    private nodeService: NodeService
  ) { 
    this.nodes = this.getNodes();
  }

  ngOnInit(): void {
  }

  getNodes(): Node[]{
    return this.nodeService.getAllNodes();
  }

}
