import { Module, CacheModule, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { LogsModule } from './logs/logs.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import config from './config/key';

@Module({
    imports: [
        CartModule,
        LoginModule,
        ProductsModule,
        UsersModule,
        AuthModule,
        LogsModule,
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
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*')
    }
}
