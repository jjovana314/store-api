import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NameEntity } from './models/name.entity';
import { AddressEntity } from './models/address.entity';
import { GeolocationEntity } from './models/geolocation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      NameEntity,
      AddressEntity,
      GeolocationEntity
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}