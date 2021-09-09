import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { LogsSchema } from './models/schemas/logs.schema';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Logs', schema: LogsSchema }
        ])
    ],
    controllers: [LogsController],
    providers: [LogsService],
    exports: [LogsService]
})
export class LogsModule { }