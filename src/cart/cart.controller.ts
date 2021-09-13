import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartDto } from './models/dto/cart.dto';
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
        return await this.cartService.filterCartsDate(
            startDateObj.startdate, endDateObj.enddate
        );
    }

    @Get(':id')
    async getCart(@Param('id') id: string): Promise<Cart> {
        return await this.cartService.getCart(id);
    }
}
