import { NameDto } from "./name.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateNameDto extends PartialType(NameDto) { }