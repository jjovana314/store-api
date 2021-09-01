import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { AddressEntity } from "./address.entity";
import { NameEntity } from "./name.entity";


@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 300 })
  email?: string;

  @Column({ type: 'varchar', length: 300 })
  username?: string;

  @Column({ type: 'varchar', length: 300 })
  password?: string;

  @ManyToOne(type => NameEntity)
  name?: NameEntity;

  @OneToOne(type => AddressEntity)
  address?: AddressEntity;

  // @OneToOne(() => NameEntity)
  // @JoinColumn()
  // name: NameEntity;

  // @OneToOne(() => AddressEntity)
  // @JoinColumn()
  // address: AddressEntity;

  @Column({ type: 'varchar', length: 50 })
  phone?: string;
}
