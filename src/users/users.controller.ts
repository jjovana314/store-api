import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
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

  @Get()
  async getUsersLimit(@Query() limitObject) {
    return await this.usersService.getUsersLimit(limitObject.limit);
  }

  @Get()
  async getAllUsers(): Promise<Users[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':_id')
  async getUser(@Param('_id') id: string): Promise<Users> {
    return await this.usersService.getUser(id);
  }
}

