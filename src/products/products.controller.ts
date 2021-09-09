import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsDto } from './models/dto/products.dto';
import { Products } from './models/interfaces/products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    ) {}

    @Post()
    async createProduct(
        @Body() productData: ProductsDto
    ): Promise<Products> {
        return await this.productsService
            .createProduct(productData);
    }

    @Post('list')
    async addProductsList(@Body() productsList: ProductsDto[]) {
        await this.productsService.addProductsList(productsList);
    }

    @Get()
    async getAllProducts(): Promise<Products[]> {
        return await this.productsService
            .getAllProducts();
    }

    @Get(':_id')
    async getProduct(@Param('_id') id: string): Promise<Products> {
        return await this.productsService.getProduct(id);
    }

}
