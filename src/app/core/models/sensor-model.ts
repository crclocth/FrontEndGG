export interface Sensor{

  nodeId: string;
  _id?: string;
  sensorName: string;
  sensorState: string; // "danger" : red / "warining" : yellow / "perfect" : green
}