import { Geolocation } from "./geolocation.interface";


export class Address {
  city: String;
  street: String;
  number: Number;
  zipcode: String;
  geolocation: Geolocation;
}