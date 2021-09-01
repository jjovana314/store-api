import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateGeolocationDto } from "./create.geolocation.dto";


export class CreateAddressDto {
  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  street: string;

  @IsNumber()
  number: number;

  @IsNotEmpty()
  zipcode: string;

  geolocation: CreateGeolocationDto;
}