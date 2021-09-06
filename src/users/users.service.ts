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
    this.usersModel.createIndexes(
      {unique: true}
    )
    let hashPassword = await bcrypt.hash(usersData.password, salt);
    usersData = {
      ...usersData,
      password: hashPassword
    };
    
    let userUsername = await this.usersModel.findOne(
      { username: usersData.username }
    );
    let userEmail = await this.usersModel.findOne(
      { email: usersData.email }
    );
    if (userUsername || userEmail) {
      throw new HttpException(
        `User with username ${usersData.username} already exist.`,
        HttpStatus.BAD_REQUEST
      );
    }
    const newUser = new this.usersModel(usersData)
    return await newUser.save();

  }

  async getAllUsers() {
    return this.usersModel.find();
  }

  async getUser(id: string): Promise<Users> {
    const user = await this.usersModel.findById(id);
    if (!user) {
      throw new NotFoundException(
        `User with id: ${id} not found`
      );
    }
    return await user;
  }
}

  
