import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from "typeorm";
import { AddressEntity } from "./address.entity";
import { NameEntity } from "./name.entity";


@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  username: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;

  @OneToOne(() => NameEntity)
  @JoinColumn()
  name: NameEntity;

  @OneToOne(() => AddressEntity)
  @JoinColumn()
  address: AddressEntity;

  @Column({ type: 'varchar', length: 50 })
  phone: string;
}
