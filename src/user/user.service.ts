import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './models/user.entity';
import { User } from './models/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async addNewUser(userData: UserEntity): Promise<UserEntity> {
    // var userDTO = new UserDto(userData);
    // userDTO.email = userData.email;
    // userDTO.address = userData.address;
    // userDTO.name = userData.name;
    // userDTO.password = userData.password;
    // userDTO.phone = userData.password;
    // userDTO.username = userData.username;
    return await this.userRepository.save(userData);
  }
}
