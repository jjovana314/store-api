import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get(':id')
    async getCart(@Param('id') id: string): Promise<Cart> {
        return await this.cartService.getCart(id);
    }
}
