import { Name } from "../models/name.interface";

export class NameDto {
  firstname: string;
  lastname: string;

  constructor(name: NameDto) {
    this.firstname = name.firstname.toString();
    this.lastname = name.lastname.toString();
  }
}