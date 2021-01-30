import { Sensor } from "./sensor-model";

export interface Node{

  // Del BackEnd
  _id?: string;
  vitality?: number;
  crop?: string;
  number?: number;
  charge?: number;
  sectorId?: string;
  greenhouse?: string;
  syncSignal?: Boolean;
  lastSync?: Date;
  users?: string[];
  modifiedAt?: Date;
  createdAt?: Date;
  pluggedIn?: Boolean;
  ds?: number;
  resetDate?: Boolean;
  //Propios
  nodeName: string;
  nodeState: string; // "danger" : red / "warining" : yellow / "perfect" : green
  sensors: Sensor[];
}