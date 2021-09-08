import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { GeolocationDto } from "./geolocation.dto";


export class AddressDto {
    city: string;
    street: string;
    number: number;
    zipcode: string;

    @ValidateNested()
    @Type(() => GeolocationDto)
    geolocation: GeolocationDto;

    phone: string;
}