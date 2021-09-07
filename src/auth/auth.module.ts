import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "./auth.local.strategy";
import { AuthService } from "./auth.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "src/users/users.module";
import { UsersSchema } from "src/users/models/schemas/users.schema";


@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService, LocalStrategy]
})
export class AuthModule { }