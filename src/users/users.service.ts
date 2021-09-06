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
const idLength = 24;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly usersModel: Model<Users>
  ) { }

  async createUser(usersData: UsersDto): Promise<Users> {
    let hashPassword = await bcrypt.hash(usersData.password, salt);
    usersData = {
      ...usersData,
      password: hashPassword
    };
    await this.userExist(usersData);
    const newUser = new this.usersModel(usersData)
    return await newUser.save();

  }

  async getAllUsers() {
    return this.usersModel.find();
  }

  async getUser(id: string): Promise<Users> {
    this.validateIdLength(id);
    const user = await this.usersModel.findById(id);
    if (!user) {
      throw new NotFoundException(
        `User with id: ${id} not found`
      );
    }
    return await user;
  }

  async userExist(usersData: UsersDto) {
    const userUsername = await this.usersModel.findOne(
      { username: usersData.username }
    );
    const userEmail = await this.usersModel.findOne(
      { email: usersData.email }
    );
    if (userUsername) {
      throw new HttpException(
        `User with username ${usersData.username} already exists.`,
        HttpStatus.BAD_REQUEST
      );
    }
    if (userEmail) {
      throw new HttpException(
        `User with email ${usersData.email} already exists.`,
        HttpStatus.BAD_REQUEST
      );
    }
  
  }

  validateIdLength(id: string) {
    if (id.length != idLength) {
      throw new HttpException(
        `id: ${id} is not valid`,
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async getUsersLimit(limitString: string): Promise<Users[]> {
    var limitNumber = Number(limitString);
    const allUsers = await this.usersModel.find();
    if (allUsers.length < limitNumber || limitNumber <= 0) {
      throw new HttpException(
        `Limit error occurred`,
        HttpStatus.BAD_REQUEST
      );
    }
    return await this.usersModel.find().limit(limitNumber);
  }

}
