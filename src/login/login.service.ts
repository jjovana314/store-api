import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from './models/dto/login.dto';
import { Login } from './models/interfaces/login.interface';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

const bcrypt = require('bcrypt');
const salt = 12;

@Injectable()
export class LoginService {
    constructor(
        private readonly jwtService: JwtService,
        @InjectModel('Login') private readonly loginModel: Model<Login>
    ) { }

    async login(loginData: LoginDto): Promise<any> {
        let passwordHashed = await bcrypt.hash(
            loginData.password,
            salt
        );
        loginData = {
            ...loginData,
            password: passwordHashed
        }
        let userData = {
            ...loginData,
            token: this.jwtService.sign(loginData)
        }
        // store login users data in database
        const user = new this.loginModel(userData);
        await user.save();
        return await {
            token: userData.token
        }
    }
}
