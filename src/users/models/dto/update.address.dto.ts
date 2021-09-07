import { AddressDto } from "./address.dto";
import { PartialType } from "@nestjs/mapped-types";


export class UpdateAddressDto extends PartialType(AddressDto) { }