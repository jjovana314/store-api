import { ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDto } from './address.dto';
import { NameDto } from './name.dto';
import { Users } from '../models/users.interface';


export class UsersDto {
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

  constructor(user: UsersDto) {
    this.email = user.email.toString();
    this.username = user.username.toString();
    this.password = user.password.toString();
    this.name = new NameDto(user.name);
    this.address = new AddressDto(user.address);
    this.phone = user.phone.toString();
  }
}