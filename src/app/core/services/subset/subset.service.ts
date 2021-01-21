import { Injectable } from '@angular/core';
import { Subset } from '../../models/subset-model';

@Injectable({
  providedIn: 'root'
})
export class SubsetService {

  private subsetsArray: Subset[] = [];

  constructor() { }

  public addSubset (subset: Subset){
    this.subsetsArray.push(subset);
    return this.subsetsArray;
  }

  public getAllSubsets(): Subset[]{
    return this.subsetsArray;
  }
}
