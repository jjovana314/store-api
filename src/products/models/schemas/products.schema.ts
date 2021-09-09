import * as mongoose from 'mongoose';


export const ProductsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    dateAdded: String
});