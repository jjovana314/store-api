import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { UsersModule } from 'src/users/users.module';
import { ProductsModule } from 'src/products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './models/schemas/cart.schema';
import { ProductsCartSchema } from './models/schemas/products.cart.schema';

@Module({
    imports: [
        UsersModule,
        ProductsModule,
        MongooseModule.forFeature([
            { name: 'Cart', schema: CartSchema },
            { name: 'ProductsCart', schema: ProductsCartSchema }
        ])
    ],
    controllers: [CartController],
    providers: [CartService]
})
export class CartModule { }