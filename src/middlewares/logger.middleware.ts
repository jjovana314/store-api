import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from 'express';


export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log(`Logging ${req.method} request IP: ${req.ip}`);
        console.log(`Logging ${req.method} request Path: ${req.path}`);
        console.log(`Logging ${req.method} request Headers: ${req.headers}`);
        next();
    }
}