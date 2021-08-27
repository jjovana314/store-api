import { Column, Entity } from 'typeorm'

export class GeolocationEntity {
  @Column({ type: 'decimal' })
  lat: number;

  @Column({ type: 'decimal'})
  long: number;
}