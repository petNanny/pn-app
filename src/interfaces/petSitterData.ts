import { IPetOwner } from "./petOwner";

export interface IService {
  service: string;
  price: number;
  unit: string;
  serviceDetail: string;
}

export interface IPetSitter {
  _id: string;
  user: IPetOwner;
  introduction: string;
  service: IService[];
}
