import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './models/schemas/cart.schema';
import { ProductsCartSchema } from './models/schemas/products.cart.schema';
import { LogsModule } from 'src/logs/logs.module';

@Module({
    imports: [
        LogsModule,
        MongooseModule.forFeature([
            { name: 'Cart', schema: CartSchema },
            { name: 'ProductsCart', schema: ProductsCartSchema }
        ])
    ],
    controllers: [CartController],
    providers: [CartService]
})
export class CartModule { }