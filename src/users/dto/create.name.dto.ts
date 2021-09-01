import { IsNotEmpty } from "class-validator";


export class CreateNameDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;
}