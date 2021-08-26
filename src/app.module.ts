import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartController } from './login/cart/cart.controller';
import { LoginController } from './products/login/login.controller';
import { ProductsController } from './user/products/products.controller';
import { UserController } from './user/user.controller';
import { CartService } from './cart/cart.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, CartController, LoginController, ProductsController, UserController],
  providers: [AppService, CartService, ProductsService, LoginService, UserService],
})
export class AppModule {}
