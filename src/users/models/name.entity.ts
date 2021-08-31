import { Column, Entity } from "typeorm";
import { UsersEntity } from "./users.entity";

@Entity({ name: 'name' })
export class NameEntity extends UsersEntity {
  @Column({ type: 'varchar', length: 20})
  firstname: string;

  @Column({ type: 'varchar', length: 25})
  lastname: string;
}