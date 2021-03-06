import {
    HttpException,
    HttpStatus,
    Injectable,
    NotFoundException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from './models/interfaces/products.interface';
import { ProductsDto } from './models/dto/products.dto';
import { UpdateProductsDto } from './models/dto/update.products.dto';
import { LogsService } from 'src/logs/logs.service';

const idLength = 24;

@Injectable()
export class ProductsService {
    constructor(
        private readonly logsService: LogsService,
        @InjectModel('Products') private readonly _productsModel: Model<Products>
    ) { }

    get productsModel() {
        return this._productsModel;
    }

    async createProduct(
        productData: ProductsDto
    ): Promise<Products> {
        await this.errorIfProductExist(productData);
        productData = {
            ...productData,
            dateAdded: this.logsService.generateDate()
        }
        const newProduct = new this.productsModel(productData);
        const result = await newProduct.save();
        this.logsService.addLogs(
            result.title,
            'created',
            result._id
        );
        return await result;
    }

    async errorIfProductExist(productData: ProductsDto) {
        const product = await this.productsModel.findOne(
            { title: productData.title }
        ).exec();
        if (product) {
            throw new HttpException(
                `Product with title: ${productData.title} already exist`,
                HttpStatus.BAD_REQUEST
            );
        }
    }

    async getProduct(id: string): Promise<Products> {
        this.validateIdLength(id);
        const product = await this.productsModel
            .findById(id)
            .exec();
        if (!product) {
            throw new NotFoundException(
                `Product with id: ${id} does not exist.`
            );
        }
        return product;
    }

    async getAllProducts(): Promise<Products[]> {
        return await this.productsModel.find();
    }

    async addProductsList(productsList: ProductsDto[]) {
        productsList.forEach(async (product) => {
            await this.createProduct(product);
        });
    }

    async getProductsLimit(
        limitString: string
    ): Promise<Products[]> {
        var limitNumber = Number(limitString);
        const allUsersLength = await (await this.productsModel
            .find())
            .length;
        if (allUsersLength < limitNumber || limitNumber <= 0) {
            throw new HttpException(
                `Limit error occurred`,
                HttpStatus.BAD_REQUEST
            );
        }
        return await this.productsModel
            .find()
            .limit(limitNumber);

    }

    async sortProducts(sort: string): Promise<Products[]> {
        if (sort !== 'desc' && sort !== 'asc') {
            throw new HttpException(
                `Sort method must be asc or desc`,
                HttpStatus.BAD_REQUEST
            );
        }
        return await this.findAndSort(sort);
    }

    async findAndSort(sort: string) {
        var promises = [];
        if (sort === 'asc') {
            promises = await this.productsModel.find()
                .sort({ dateAdded: 1 });
        }
        if (sort === 'desc') {
            promises = await this.productsModel.find()
                .sort({ dateAdded: -1 });
        }
        return await promises;
    }

    async updateProduct(
        updateData: UpdateProductsDto, id: string
    ): Promise<Products> {
        this.validateIdLength(id);
        await this.getProduct(id);
        await this.productsModel.findByIdAndUpdate(
            id, updateData
        );
        const result = await this.getProduct(id);
        this.logsService.addLogs(
            result.title,
            'updated',
            id
        );
        return await result;
    }

    async deleteProduct(id: string) {
        this.validateIdLength(id);
        const result = await this.productsModel
            .findByIdAndRemove(id);
        this.logsService.addLogs(result.title, 'removed', id);
    }

    async getAllCategories(): Promise<string[]> {
        const products = await this.productsModel.find().exec();
        let categories = [];
        products.forEach((product) => {
            categories.push(product.category);
        });
        // eliminate duplicates
        return [... new Set(categories)];
    }

    async getSpecificCategory(
        category: string
    ): Promise<Products[]> {
        const categories = await this.getAllCategories();
        // make sure that category exist
        for (let currCategory of categories) {
            if (currCategory == category) {
                return await this.productsModel.find(
                    { category: category }
                );
            }
        }
        // if category does not exist
        throw new NotFoundException(
            `Category: ${category} not found`
        );
    }

    validateIdLength(id: string) {
        if (id.length !== idLength) {
            throw new HttpException(
                `id: ${id} is not valid`,
                HttpStatus.UNAUTHORIZED
            );
        }
    }
}
