import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersEntity } from './models/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NameEntity } from './models/name.entity';
import { AddressEntity } from './models/address.entity';
import { GeolocationEntity } from './models/geolocation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
      NameEntity,
      AddressEntity,
      GeolocationEntity
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}