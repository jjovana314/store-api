import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Query,
    Delete,
    Put
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './models/interfaces/users.interface';
import { UsersDto } from './models/dto/users.dto';
import { UpdateUsersDto } from './models/dto/update.users.dto';
import { UpdatePasswordDto } from './models/dto/update.password.dto';


@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Post()
    async createUser(@Body() usersData: UsersDto): Promise<Users> {
        return await this.usersService.createUser(usersData);
    }

    @Get()
    async getUsersLimit(@Query() limitObject) {
        return await this.usersService.getUsersLimit(
            limitObject.limit
        );
    }

    @Get()
    async getAllUsers(): Promise<Users[]> {
        return await this.usersService.getAllUsers();
    }

    @Get(':_id')
    async getUser(@Param('_id') id: string): Promise<Users> {
        return await this.usersService.getUser(id);
    }

    @Get('sort/:typeOfSort')
    async sortResults(
        @Param('typeOfSort') typeOfSort: string
    ): Promise<Users[]> {
        return await this.usersService.sortResults(typeOfSort);
    }

    @Put(':_id')
    async updateUser(
        @Param('_id') id: string,
        @Body() updateData: UpdateUsersDto
    ): Promise<Users> {
        return await this.usersService.updateUser(updateData, id);
    }

    @Put('update_password/:_id')
    async updatePassword(
        @Param('_id') id: string,
        @Body() passwordUpdate: UpdatePasswordDto
    ) {
        await this.usersService.updatePassword(
            id, passwordUpdate.newPassword
        );
    }

    @Delete(':_id')
    async deleteUser(@Param('_id') id: string) {
        await this.usersService.deleteUser(id);
    }
}

