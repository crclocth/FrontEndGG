export interface Sensor{

  //Del BackEnd
  _id?: string;
  name?: string;
  type?: string;
  unit?: string;
  stat?: number;
  model?: string;
  address?: number;
  data?: number;
  rawData?: number;
  optimum?: number;
  optimumTolerance?: number;
  optimumMax?: number;
  optimumMin?: number;
  permittedMin?: number;
  permittedMax?: number;
  borderTolerance?: number;
  borderMax?: number;
  borderMin?: number;
  max?: number;
  min?: number;
  historicalMax?: number;
  historicalMin?: number;
  dateMax?: Date;
  dateMin?: Date;
  fixError?: Number;
  greenhouse?: string;
  users?: string[];
  modifiedAt?: Date;
  createdAt?: Date;
  number?: number;
  //Propios
  nodeId?: string;
  sensorName?: string;
  sensorState?: string; // "danger" : red / "warining" : yellow / "perfect" : green
}