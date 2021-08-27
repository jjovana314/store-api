import { ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDto } from './address.dto';
import { NameDto } from './name.dto';


export class UserDto {
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