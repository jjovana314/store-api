import * as mongoose from 'mongoose';
import { ProductsCartSchema } from './products.cart.schema';

export const CartSchema = new mongoose.Schema({
    userId: String,
    date: String,
    products: [ProductsCartSchema]
});