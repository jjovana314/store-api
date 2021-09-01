import { UpdateAddressDto } from "./address.dto";
import { UpdateNameDto } from "./name.dto";
import { Type } from "class-transformer";
import { ValidateNested, IsEmail } from "class-validator";


export class UpdateUsersDto {
  @IsEmail()
  email?: string;

  username?: string;
  password?: string;

  @ValidateNested()
  @Type(() => UpdateNameDto)
  name?: UpdateNameDto;

  @ValidateNested()
  @Type(() => UpdateAddressDto)
  address?: UpdateAddressDto;

  phone?: string;
}