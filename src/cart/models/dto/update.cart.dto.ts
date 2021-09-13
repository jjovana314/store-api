import { PartialType } from "@nestjs/mapped-types";
import { CartDto } from "./cart.dto";

export class UpdateCartsDto extends PartialType(CartDto) { }
