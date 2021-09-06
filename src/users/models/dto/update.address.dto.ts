import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { UpdateGeolocationDto } from "./update.geolocation.dto";


export class UpdateAddressDto {
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;

  @ValidateNested()
  @Type(() => UpdateGeolocationDto)
  geolocation?: UpdateGeolocationDto;
  
  phone?: string;
}