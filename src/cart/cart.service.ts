import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogsService } from 'src/logs/logs.service';
import { CartDto } from './models/dto/cart.dto';
import { UpdateCartDto } from './models/dto/update.cart.dto';
import { Cart } from './models/interfaces/cart.interface';

@Injectable()
export class CartService {
    constructor(
        private readonly logsService: LogsService,
        @InjectModel('Cart') private readonly cartModel: Model<Cart>
    ) {}

    async addNewCart(cart: CartDto): Promise<Cart> {
        // converting date from YYYY-MM-DD to Date object 
        const cartDto = {
            ...cart,
            date: new Date(cart.date)
        };
        // creating cart and saving into database
        const newCart = new this.cartModel(cartDto);
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

    async filterCartsByDate(
        startDate: string, endDate: string
    ): Promise<Cart[]> {
        // finding date greather then or equal to startDate
        // and less then or equal to endDate
        return await this.cartModel.find({
            date: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            }
        });
    }

    validateSortType(sortType: string) {
        if (sortType !== 'asc' && sortType !== 'desc') {
            throw new HttpException(
                `Sort type must be asc or desc`,
                HttpStatus.BAD_REQUEST
            );
        }
    }

    async sortCarts(sortType: string): Promise<Cart[]> {
        this.validateSortType(sortType);
        let promises = [];
        if (sortType === 'asc') {
            promises = await this.cartModel.find()
                .sort({ date: 1 });
        }
        else {
            // sorting descending
            promises = await this.cartModel.find()
                .sort({ date: -1 });
        }
        return await promises;
    }

    async getCartsLimit(limit: string) {
        const allCarts = await this.cartModel.find().exec();
        if (allCarts.length < Number(limit) || Number(limit) < 0) {
            throw new HttpException(
                `Limit error occurred`,
                HttpStatus.BAD_REQUEST
            );
        }
        // slicing allCarts array from the begining to the limit
        return allCarts.slice(null, Number(limit));
    }

    async getUserCarts(userId: string): Promise<Cart[]> {
        return await this.cartModel.find({ userId: userId });
    }

    async updateCart(
        id: string, updateData: UpdateCartDto
    ): Promise<Cart> {
        await this.cartModel.findByIdAndUpdate(
            id, updateData
        );
        this.logsService.addLogs(
            'cart',
            'updated',
            id
        );
        // returning updated cart
        return await this.getCart(id);
    }

    async deleteCart(id: string) {
        await this.cartModel.findByIdAndRemove(id);
    }
}
