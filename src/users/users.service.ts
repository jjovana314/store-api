import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { UsersDto } from './dto/users.dto';
import { AddressEntity } from './models/address.entity';
import { GeolocationEntity } from './models/geolocation.entity';
import { NameEntity } from './models/name.entity';
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

  async addNewUser(usersData: CreateUserDto): Promise<UsersDto> {
    var passwordHash = await bcrypt.hash(usersData.password, salt);
    usersData = {
      ...usersData,
      password: passwordHash
    };

    const user: UsersEntity = await this.usersRepository.create({
      username: usersData.username,
      password: usersData.password,
      email: usersData.email,
      address: usersData.address,
      name: usersData.name,
      phone: usersData.phone
    });
    return await this.usersRepository.save(user);
  }

  async getAllUsers(): Promise<UsersDto[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: string): Promise<UsersDto> {
    const user = await this.usersRepository.findOne({
      where: { id }
    });
    if (!user) {
      throw NotFoundException(
        `User with id ${id} does not exist`
      );
    }
    return await user;
  }
}
