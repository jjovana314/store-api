import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import config from './config/key';

@Module({
  imports: [
    CartModule,
    LoginModule,
    ProductsModule,
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(
      config.mongoURI,
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
