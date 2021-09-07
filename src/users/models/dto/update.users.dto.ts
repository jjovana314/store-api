import { UpdateAddressDto } from "./update.address.dto";
import { UpdateNameDto } from "./update.name.dto";
import { Type } from "class-transformer";
import { ValidateNested, IsEmail } from "class-validator";
import { UsersDto } from "./users.dto";
import { PartialType } from "@nestjs/mapped-types";


export class UpdateUsersDto extends PartialType(UsersDto) {}