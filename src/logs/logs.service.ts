import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LogsDto } from "./models/dto/logs.dto";
import { Logs } from "./models/interfaces/logs.interface";

@Injectable()
export class LogsService {
    constructor(
        @InjectModel('Logs') private readonly _logsModel: Model<Logs>
    ) { }

    get logsModel() {
        return this._logsModel;
    }

    async addLogs(name: string, action: string, id: string) {
        const newLog: LogsDto = {
            id: id,
            name: name,
            action: action,
            at: this.generateDate()
        }
        const log = new this.logsModel(newLog);
        await log.save();
    }

    generateDate(): string {
        return new Date().toLocaleString(
            'hu-HU', { timeZone: 'CET' }
        );
    }

    async getLogs() {
        return await this.logsModel.find();
    }
}