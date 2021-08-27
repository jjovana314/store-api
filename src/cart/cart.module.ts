import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { UserModule } from 'src/user/user.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [UserModule, ProductsModule],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}