import * as mongoose from 'mongoose';


export const ProductsCartSchema = new mongoose.Schema({
    productId: String,
    quantity: Number
});