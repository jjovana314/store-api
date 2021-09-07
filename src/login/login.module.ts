import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtModule } from "@nestjs/jwt";
import { LoginSchema } from './models/schemas/login.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Login', schema: LoginSchema }
    ]),
    AuthModule,
    JwtModule.register({
      secret: 'Secret underwater party advencha',
      signOptions: {
        expiresIn: '60s'
      }
    })
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule { }