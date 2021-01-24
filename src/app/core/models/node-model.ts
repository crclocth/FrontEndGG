import { Sensor } from "./sensor-model";

export interface Node{

  _id?: string;
  nodeName: string;
  nodeState: string; // "danger" : red / "warining" : yellow / "perfect" : green
  sensors: Sensor[];
}