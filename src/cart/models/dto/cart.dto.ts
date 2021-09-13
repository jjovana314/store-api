import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { ProductsCartDto } from "./products.cart.dto";

export class CartDto {
    userId: string;
    date: Date;

    @ValidateNested({ each: true })
    @Type(() => ProductsCartDto)
    products: ProductsCartDto[];
}