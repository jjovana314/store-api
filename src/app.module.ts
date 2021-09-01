import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CartModule,
    LoginModule,
    ProductsModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://172.17.0.1:27017/db',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
