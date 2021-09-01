import { 
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './models/interfaces/users.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UsersDto } from './models/dto/users.dto';


const bcrypt = require('bcrypt');
const salt = 12;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<Users>
  ) { }

  async createUser(usersData: UsersDto): Promise<Users> {
    let hashPassword = bcrypt.hash(usersData.password, salt);
    usersData = {
      ...usersData,
      password: hashPassword
    };
    let userUsername = this.usersModel.findOne(
      { username: usersData.username }
    );
    let userEmail = this.usersModel.findOne(
      { email: usersData.email }
    );
    if (userUsername || userEmail) {
      throw new HttpException(
        `User with username ${usersData.username} already exist.`,
        HttpStatus.BAD_REQUEST
      )
    }
    const newUser = new this.usersModel(usersData)
    return await newUser.save()

  }
}

  
