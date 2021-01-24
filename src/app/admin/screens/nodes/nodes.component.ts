import { Component, OnInit } from '@angular/core';
import { Node } from 'src/app/core/models/node-model';
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
    return this.nodeService.getAllNodes();
  }

  public postNode(){ 
    let datosForm: Node = {
      nodeName: 'Nodo001',
      nodeState: 'perfect',
      sensors: [
        {
          sensorName: 'Sensor0001',
          sensorState: 'perfect'
        },
        {
          sensorName: 'Sensor0002',
          sensorState: 'warning'
        },
        {
          sensorName: 'Sensor0003',
          sensorState: 'danger'
        },
        {
          sensorName: 'Sensor0004',
          sensorState: 'perfect'
        }
      ]
    }
    this.newNode = datosForm;
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
