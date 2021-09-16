import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './models/schemas/cart.schema';
import { ProductsCartSchema } from './models/schemas/products.cart.schema';
import { LogsModule } from 'src/logs/logs.module';
import { ProductsModule } from 'src/products/products.module';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        LogsModule,
        ProductsModule,
        UsersModule,
        MongooseModule.forFeature([
            { name: 'Cart', schema: CartSchema },
            { name: 'ProductsCart', schema: ProductsCartSchema }
        ])
    ],
    controllers: [CartController],
    providers: [CartService]
})
export class CartModule { }