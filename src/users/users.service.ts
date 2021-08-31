import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from './dto/users.dto';
import { UsersEntity } from './models/users.entity';
import { Users } from './models/users.interface';

const bcrypt = require('bcrypt');
const salt = 12

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>
  ) { }

  async addNewUser(usersData: UsersEntity): Promise<UsersEntity> {
    var passwordHash = bcrypt.hash(usersData.password, salt);
    usersData = {
      ...usersData,
      password: passwordHash
    }
    return await this.usersRepository.save(usersData);
  }

  async getAllUsers(): Promise<UsersEntity[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: string): Promise<UsersEntity> {
    return await this.usersRepository.findOne(id);
  }
}
