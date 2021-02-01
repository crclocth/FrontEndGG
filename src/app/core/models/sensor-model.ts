export interface Sensor{

  //Del BackEnd
  _id?: string;
  name?: string;
  type?: string; 
  unit?: string;
  stat?: number; // INACIVE: -1 - CRITICAL_MAX: 0 - CRITICAL_MIN: 1 - WARNING_MAX: 2 - WARNING_MIN: 3 - OPTIMUM: 4 - OK: 5
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