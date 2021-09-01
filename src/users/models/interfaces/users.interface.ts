import { Address } from "./address.interface";
import { Name } from "./name.interface";


export class Users {
  _id: Number;
  email: String;
  username: String;
  password: String;
  name: Name;
  address: Address;
  phone: String
}