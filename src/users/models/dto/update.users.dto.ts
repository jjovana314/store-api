import { UsersDto } from "./users.dto";
import { PartialType } from "@nestjs/mapped-types";
import { OmitType } from "@nestjs/mapped-types";


export class UpdateUsersDto extends PartialType(
    OmitType(UsersDto, ['password'] as const)
) {}