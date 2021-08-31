import { Column, Entity } from 'typeorm'
import { AddressEntity } from './address.entity';

@Entity({ name: 'geolocation' })
export class GeolocationEntity extends AddressEntity{
  @Column({ type: 'decimal' })
  lat: number;

  @Column({ type: 'decimal'})
  long: number;
}