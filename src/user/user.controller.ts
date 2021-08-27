import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './models/user.interface';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post()
  async addNewUser(@Body() userData: UserDto): Promise<User> {
    return await this.userService.addNewUser(userData);
  }
}
