import { PartialType } from "@nestjs/mapped-types";
import { ProductsCartDto } from "./products.cart.dto";

export class UpdateProductsCartDto extends PartialType(
    ProductsCartDto
) { }
