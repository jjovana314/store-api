import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './models/user.interface';
import { UserEntity } from './models/user.entity';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post()
  async addNewUser(@Body() userData: UserEntity): Promise<UserEntity> {
    return await this.userService.addNewUser(userData);
  }
}
