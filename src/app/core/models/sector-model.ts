import { Subset } from "./subset-model";

export interface Sector{
    _id?: string;
    name:string;
    subsets: Array<Subset>;
}