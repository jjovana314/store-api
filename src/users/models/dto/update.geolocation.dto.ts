import { GeolocationDto } from "./geolocation.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateGeolocationDto extends PartialType(GeolocationDto) { }