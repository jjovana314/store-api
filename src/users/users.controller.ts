import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './models/interfaces/users.interface';
import { UsersDto } from './models/dto/users.dto';
import { UpdateUsersDto } from './models/dto/update.users.dto';


@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) { }

  @Post()
  async createUser(@Body() usersData: UsersDto): Promise<Users> {
    return await this.usersService.createUser(usersData);
  }

}

