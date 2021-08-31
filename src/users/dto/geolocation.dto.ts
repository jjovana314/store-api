import { Geolocation } from "../models/geolocation.interface";

export class GeolocationDto {
  lat: string;
  long: string;

  constructor(geolocation: GeolocationDto) {
    this.lat = geolocation.lat.toString();
    this.long = geolocation.long.toString();
  }
}