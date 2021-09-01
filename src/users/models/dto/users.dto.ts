import { AddressDto } from "./address.dto";
import { NameDto } from "./name.dto";
import { Type } from "class-transformer";
import { ValidateNested, IsEmail } from "class-validator";


export class UsersDto {
  @IsEmail()
  email: string;

  username: string;
  password: string;

  @ValidateNested()
  @Type(() => NameDto)
  name: NameDto;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  phone: string;
}