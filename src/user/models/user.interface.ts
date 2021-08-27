import { Address } from "cluster";
import { Name } from "./name.interface";

export interface User {
  id: Number;
  email: String;
  username: String;
  password: String;
  name: Name;
  address: Address;
  phone: String;
}