import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsModule } from 'src/logs/logs.module';
import { ProductsSchema } from './models/schemas/products.schema';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Products', schema: ProductsSchema }
        ]),
        LogsModule
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService]
})
export class ProductsModule { }