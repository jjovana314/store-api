import { Column, Entity } from 'typeorm'

@Entity({ name: 'geolocation' })
export class GeolocationEntity {
  @Column({ type: 'decimal' })
  lat: number;

  @Column({ type: 'decimal'})
  long: number;
}