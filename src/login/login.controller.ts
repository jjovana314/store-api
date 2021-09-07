import { Controller, Post, Body } from '@nestjs/common';
import { LocalStrategy } from 'src/auth/auth.local.strategy';
import { LoginService } from './login.service';
import { LoginDto } from './models/dto/login.dto';
import { Login } from './models/interfaces/login.interface';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly authLocalStrategy: LocalStrategy
  ) {}
  @Post()
  async login(@Body() loginData: LoginDto): Promise<any> {
    await this.authLocalStrategy.validate(
      loginData.username, loginData.password
    );
    return await this.loginService.login(loginData);
  }
}
