import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogsService } from 'src/logs/logs.service';
import { CartDto } from './models/dto/cart.dto';
import { Cart } from './models/interfaces/cart.interface';

@Injectable()
export class CartService {
    constructor(
        private readonly logsService: LogsService,
        @InjectModel('Cart') private readonly cartModel: Model<Cart>
    ) {}

    async addNewCart(cart: CartDto): Promise<Cart> {
        const newCart = new this.cartModel(cart);
        const result = await newCart.save();
        this.logsService.addLogs(
            'cart',
            'created',
            result._id
        );
        return await result;
    }

    async getCarts(): Promise<Cart[]> {
        return await this.cartModel.find();
    }

    async getCart(id: string): Promise<Cart> {
        return await this.cartModel.findById(id);
    }
}
