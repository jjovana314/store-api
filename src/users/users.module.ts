import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './models/schemas/users.schema';
import { AddressSchema } from './models/schemas/address.schema';
import { NameSchema } from './models/schemas/name.schema';
import { GeolocationSchema } from './models/schemas/geolocation.schema';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Users', schema: UsersSchema },
            { name: 'Address', schema: AddressSchema },
            { name: 'Name', schema: NameSchema },
            { name: 'Geolocation', schema: GeolocationSchema }
        ])
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule { }