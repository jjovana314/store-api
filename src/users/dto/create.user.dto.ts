import { IsNotEmpty, IsEmail } from "class-validator";
import { CreateNameDto } from "./create.name.dto";
import { CreateAddressDto } from './create.address.dto';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  name: CreateNameDto;

  address: CreateAddressDto;

  phone: string;

}