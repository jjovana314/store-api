import { Body, Controller, Post } from '@nestjs/common';
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
}
