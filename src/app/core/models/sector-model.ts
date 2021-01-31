import { Subset } from "./subset-model";

export interface Sector{
    
    //Del BackEnd
    _id?: string;
    name: string;
    number?: number;
    vitality?: number;
    crop?: string;
    plantCount?: number;
    recommendation?: string;
    count?: Object;
    greenhouseId?: string;
    users?: string[];
    createdAt?: Date;
    modifiedAt?: Date;
    //Propios
    subsets?: Subset[];
}