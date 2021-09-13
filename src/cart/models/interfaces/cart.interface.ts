import { ProductsCart } from "./products.cart.interface";

export interface Cart {
    userId: string;
    date: string;

    products: ProductsCart[];
}