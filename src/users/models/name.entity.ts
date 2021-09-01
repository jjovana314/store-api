import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'name' })
export class NameEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20})
  firstname?: string;

  @Column({ type: 'varchar', length: 25})
  lastname?: string;
}