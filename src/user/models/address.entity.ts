import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { GeolocationEntity } from "./geolocation.entity";

@Entity({ name: 'address' })
export class AddressEntity {
  @Column({ type: 'varchar', length: '50'})
  city: string;

  @Column({ type: 'varchar', length: 50})
  street: string;

  @Column({ type: 'int' })
  number: number;

  @Column({ type: 'varchar', length: 15})
  zipcode: string;

  @OneToOne(() => GeolocationEntity)
  @JoinColumn()
  geolocation: GeolocationEntity;
}