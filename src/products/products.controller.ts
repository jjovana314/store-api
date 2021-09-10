import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query
} from '@nestjs/common';
import { ProductsDto } from './models/dto/products.dto';
import { UpdateProductsDto } from './models/dto/update.products.dto';
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
    async getProductsLimit(
        @Query() limitObject
    ): Promise<Products[]> {
        return await this.productsService.getProductsLimit(
            limitObject.limit
        );
    }

    @Get('sort/:typeOfSort')
    async sortProducts(
        @Param('typeOfSort') typeOfSort
    ): Promise<Products[]> {
        return await this.productsService.sortProducts(typeOfSort);
    }

    @Get()
    async getAllProducts(): Promise<Products[]> {
        return await this.productsService
            .getAllProducts();
    }

    @Get('categories')
    async getAllCategories(): Promise<string[]> {
        return await this.productsService.getAllCategories();
    }

    @Get(':_id')
    async getProduct(@Param('_id') id: string): Promise<Products> {
        return await this.productsService.getProduct(id);
    }

    @Put(':_id')
    async updateProduct(
        @Body() productUpdateData: UpdateProductsDto,
        @Param('_id') id: string
    ): Promise<Products> {
        return await this.productsService.updateProduct(
            productUpdateData, id
        );
    }

    @Delete(':_id')
    async deleteProduct(@Param('_id') id: string) {
        await this.productsService.deleteProduct(id);
    }
}
