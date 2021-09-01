import { IsNotEmpty } from "class-validator";


export class CreateGeolocationDto {
  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  long: string;
}