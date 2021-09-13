import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartDto } from './models/dto/cart.dto';
import { Cart } from './models/interfaces/cart.interface';

@Injectable()
export class CartService {
    constructor(
        @InjectModel('Cart') private readonly cartModel: Model<Cart>
    ) {}

    async addNewCart(cart: CartDto): Promise<Cart> {
        const newCart = new this.cartModel(cart);
        return await newCart.save();
    }
}
