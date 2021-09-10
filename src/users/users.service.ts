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
import { LogsService } from 'src/logs/logs.service';


const bcrypt = require('bcrypt');
const salt = 12;
const idLength = 24;

@Injectable()
export class UsersService {
    constructor(
        private readonly logsService: LogsService,
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
            dateOfRegistration: this.logsService.generateDate(),
            password: hashPassword
        };
        // await this.usernameOrEmailExists(usersData);
        await this.errorIfUsernameExists(usersData.username);
        await this.errorIfEmailExists(usersData.email);
        const newUser = new this.usersModel(usersData)
        const result = await newUser.save();
        this.logsService.addLogs(
            result.username.toString(),
            'registered',
            result._id
        );
        return await result;
    }

    async getAllUsers() {
        return this.usersModel.find().exec();
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

    async errorIfUsernameExists(username: string) {
        const userUsername = await this.usersModel.findOne(
            { username: username }
        ).exec();
        if (userUsername) {
            throw new HttpException(
                `User with username ${username} already exists.`,
                HttpStatus.UNAUTHORIZED
            );
        }
    }

    async errorIfEmailExists(email: string) {
        const userEmail = await this.usersModel.findOne(
            { email: email }
        ).exec();
        if (userEmail) {
            throw new HttpException(
                `User with email ${email} already exists.`,
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
        const allUsers = await this.usersModel.find();
        if (allUsers.length < limitNumber || limitNumber <= 0) {
            throw new HttpException(
                `Limit error occurred`,
                HttpStatus.BAD_REQUEST
            );
        }
        return await this.usersModel.find().limit(limitNumber);
    }

    async sortResults(sort: string): Promise<Users[]> {
        if (sort !== 'desc' && sort !== 'asc') {
            throw new HttpException(
                `Sort method must be asc or desc`,
                HttpStatus.BAD_REQUEST
            )
        }
        return await this.findAndSort(sort);
    }

    async findAndSort(sort: string) {
        var promises = [];
        if (sort === 'asc') {
            promises = await this.usersModel.find()
                .sort({ dateOfRegistration: 1 })
        }
        if (sort === 'desc') {
            promises = await this.usersModel.find()
                .sort({ dateOfRegistration: -1 })
        }
        return await promises;
    }

    async updateUser(
        updateData: UpdateUsersDto, id: string
    ): Promise<Users> {
        await this.userExist(id);
        // await this.usernameOrEmailExists(updateData);
        await this.errorIfUsernameExists(updateData.username);
        await this.errorIfEmailExists(updateData.email);
        await this.usersModel.findByIdAndUpdate(
            id, updateData
        );
        const result = await this.getUser(id);
        this.logsService.addLogs(
            result.username.toString(),
            'updated',
            id
        );
        return await result;
    }

    async deleteUser(id: string) {
        await this.usersModel.findByIdAndRemove(id);
    }

    async updatePassword(id: string, passwordUpdate: any) {
        const passwordUpdateHashed = await bcrypt.hash(
            passwordUpdate, salt
        );
        await this.validatePassword(id, passwordUpdateHashed);
        await this.usersModel.findByIdAndUpdate(
            id,
            { $set: {password: passwordUpdateHashed } }
        );
        const userUpdated = await this.getUser(id);
        this.logsService.addLogs(
            userUpdated.username.toString(),
            'password updated',
            id
        );
    }

    async validatePassword(id: string, newPasswordHashed: string) {
        const user = await this.usersModel.findById(id).exec();
        if (newPasswordHashed == user.password) {
            throw new HttpException(
                `Old password cannot be new password`,
                HttpStatus.BAD_REQUEST
            );
        }
    }

    async userExist(id: string) {
        const user = await this.usersModel.findById(id).exec();
        if (!user) {
            throw new NotFoundException(
                `User with id: ${id} does not exist`
            )
        }
    }
}
