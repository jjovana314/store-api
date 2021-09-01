import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'geolocation' })
export class GeolocationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal' })
  lat: number;

  @Column({ type: 'decimal'})
  long: number;
}