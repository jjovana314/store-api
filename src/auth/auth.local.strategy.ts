import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Model } from "mongoose";
import { Strategy } from "passport-local";
import { UsersService } from "src/users/users.service";

const bcrypt = require('bcrypt');
const saltRounds = 12;

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);
  constructor(
    private readonly usersService: UsersService
  ) {
    super();
  }

  public async validate(
    username: string, password: string
  ): Promise<any> {
    const user = await this.usersService.usersModel.findOne(
      { username: username }
    );
    if (!user) {
      throw new UnauthorizedException(
        `User ${username} not found`
      )
    }
    let passswordsEqual = await bcrypt.compare(
      password, user.password
    );
    if (!passswordsEqual) {
      throw new UnauthorizedException(
        `Password for ${username} is not valid`
      );
    }
  }
}