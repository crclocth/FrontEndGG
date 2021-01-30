import { Component, OnInit } from '@angular/core';
import { SubsetService } from '../../core/services/subset/subset.service';

@Component({
  selector: 'app-modal-delete-sub',
  templateUrl: './modal-delete-sub.component.html',
  styleUrls: ['./modal-delete-sub.component.less']
})
export class ModalDeleteSubComponent implements OnInit {

  constructor(
    public subsetService: SubsetService
  ) { }

  ngOnInit(): void {
  }
  buttonDeletePressed(){
    this.subsetService.deleteSubset.emit();
  }
  
}
