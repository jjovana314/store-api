import { Column, Entity } from "typeorm";

@Entity({ name: 'name' })
export class NameEntity {
  @Column({ type: 'varchar', length: 20})
  firstname: string;

  @Column({ type: 'varchar', length: 25})
  lastname: string;
}