import { Geolocation } from "./geolocation.interface";

export interface Address {
  city: String;
  street: String;
  number: Number;
  zipcode: String;
  geolocation: Geolocation;
}