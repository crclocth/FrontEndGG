import { Injectable } from '@angular/core';
import { Node } from '../../models/node-model';
import { Sensor } from '../../models/sensor-model';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  public sensorArray: Sensor[] = [];
  public nodeSelected: Node;

  constructor() { 
    this.nodeSelected = null;
  }

  public random() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 9; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public addSensor (sensor: Sensor){
    sensor._id = this.random();
    for(let i=0; i<this.sensorArray.length; i++){
      if (sensor.sensorName == this.sensorArray[i].sensorName)
        { return null; }
    }
    this.sensorArray.push(sensor);
    this.nodeSelected.sensors.push(sensor);
    return this.sensorArray;
  }

  public getSector(node: Node){
    this.nodeSelected = node;
    console.log(this.nodeSelected);
  }

  public getAllSensors (): Sensor[] {
    if (this.nodeSelected === null)
      { return this.sensorArray; }
    console.log(this.nodeSelected.sensors);
    return this.nodeSelected.sensors;
  }

  public getTamanio(): number{
    return this.sensorArray.length;
  }
}
