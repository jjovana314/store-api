import { Address } from "cluster";
import { Name } from "./name.interface";

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}