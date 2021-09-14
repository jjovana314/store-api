import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    Put
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './models/dto/cart.dto';
import { UpdateCartDto } from './models/dto/update.cart.dto';
import { Cart } from './models/interfaces/cart.interface';

@Controller('cart')
export class CartController {
    constructor(
        private readonly cartService: CartService
    ) {}

    @Post()
    async addNewCart(@Body() cart: CartDto): Promise<Cart> {
        return await this.cartService.addNewCart(cart);
    }

    @Get()
    async getCarts(): Promise<Cart[]> {
        return await this.cartService.getCarts();
    }

    @Get('filterCartsByDate')
    async filterCartsByDate(
        @Query() startDateObj, @Query() endDateObj
    ): Promise<Cart[]> {
        return await this.cartService.filterCartsByDate(
            startDateObj.startdate, endDateObj.enddate
        );
    }

    @Get('getCartsLimit')
    async getCartsLimit(@Query() limitObj): Promise<Cart[]> {
        return await this.cartService.getCartsLimit(limitObj.limit);
    }

    @Get('sort/:sortType')
    async sortCarts(
        @Param('sortType') sortType: string
    ): Promise<Cart[]> {
        return await this.cartService.sortCarts(sortType);
    }

    @Get('user/:userId')
    async getUserCarts(
        @Param('userId') userId: string
    ): Promise<Cart[]> {
        return await this.cartService.getUserCarts(userId);
    }

    @Get(':id')
    async getCart(@Param('id') id: string): Promise<Cart> {
        return await this.cartService.getCart(id);
    }

    @Put(':id')
    async updateCart(
        @Param('id') id: string, @Body() updateData: UpdateCartDto
    ): Promise<Cart> {
        return await this.cartService.updateCart(id, updateData);
    }

    @Delete(':id')
    async deleteCart(@Param('id') id: string) {
        await this.cartService.deleteCart(id);
    }
}
