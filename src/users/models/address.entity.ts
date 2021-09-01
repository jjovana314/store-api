import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { GeolocationEntity } from "./geolocation.entity";

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: '50'})
  city?: string;

  @Column({ type: 'varchar', length: 50})
  street?: string;

  @Column({ type: 'int' })
  number?: number;

  @Column({ type: 'varchar', length: 15})
  zipcode?: string;

  @OneToOne(type => GeolocationEntity)
  geolocation?: GeolocationEntity;

  // @OneToOne(() => GeolocationEntity)
  // @JoinColumn()
  // geolocation: GeolocationEntity;
}