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
import { UpdateUsersDto } from './models/dto/update.users.dto';


const bcrypt = require('bcrypt');
const salt = 12;
const idLength = 24;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly _usersModel: Model<Users>
  ) { }

  get usersModel() {
    return this._usersModel;
  }

  async createUser(usersData: UsersDto): Promise<Users> {
    let hashPassword = await bcrypt.hash(
      usersData.password, salt
    );
    usersData = {
      ...usersData,
      dateOfRegistration: this.generateDate(),
      password: hashPassword
    };
    await this.userExist(usersData);
    const newUser = new this._usersModel(usersData)
    return await newUser.save();
  }

  generateDate(): string {
    return new Date().toLocaleString(
      'hu-HU', { timeZone: 'CET' }
    );
  }

  async getAllUsers() {
    return this._usersModel.find().exec();
  }

  async getUser(id: string): Promise<Users> {
    this.validateIdLength(id);
    const user = await this._usersModel.findById(id);
    if (!user) {
      throw new NotFoundException(
        `User with id: ${id} not found`
      );
    }
    return await user;
  }

  async userExist(usersData: UsersDto) {
    const userUsername = await this._usersModel.findOne(
      { username: usersData.username }
    );
    const userEmail = await this._usersModel.findOne(
      { email: usersData.email }
    );
    if (userUsername) {
      throw new HttpException(
        `User with username ${usersData.username} already exists.`,
        HttpStatus.UNAUTHORIZED
      );
    }
    if (userEmail) {
      throw new HttpException(
        `User with email ${usersData.email} already exists.`,
        HttpStatus.UNAUTHORIZED
      );
    }
  
  }

  validateIdLength(id: string) {
    if (id.length !== idLength) {
      throw new HttpException(
        `id: ${id} is not valid`, HttpStatus.UNAUTHORIZED
      );
    }
  }

  async getUsersLimit(limitString: string): Promise<Users[]> {
    var limitNumber = Number(limitString);
    const allUsers = await this._usersModel.find();
    if (allUsers.length < limitNumber || limitNumber <= 0) {
      throw new HttpException(
        `Limit error occurred`,
        HttpStatus.BAD_REQUEST
      );
    }
    return await this._usersModel.find().limit(limitNumber);
  }

  async sortResults(sort: string): Promise<Users[]> {
    var promises = [];
    if (sort !== 'desc' && sort !== 'asc') {
      throw new HttpException(
        `Sort method must be asc or desc`,
        HttpStatus.BAD_REQUEST
      )
    }
    if (sort === 'asc') {
      promises = await this._usersModel.find()
        .sort({dateOfRegistration: 1})
    }
    if (sort === 'desc') {
      promises = await this._usersModel.find()
        .sort({dateOfRegistration: -1})
    }
    return await promises;
  }

  async updateUser(updateData: UpdateUsersDto, id: string) {
    return await this._usersModel
      .findByIdAndUpdate(id, updateData);
  }

  async deleteUser(id: string) {
    await this._usersModel.findByIdAndRemove(id);
  }
}
