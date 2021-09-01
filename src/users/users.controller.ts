import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';
import { Users } from './models/users.interface';
import { UsersEntity } from './models/users.entity';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) { }

  @Post()
  async addNewUser(@Body() userData: CreateUserDto): Promise<UsersDto> {
    return await this.usersService.addNewUser(userData);
  }

  @Get()
  async getAllUsers(): Promise<UsersDto[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param() id: string): Promise<UsersDto> {
    return await this.usersService.getUser(id);
  }
}
