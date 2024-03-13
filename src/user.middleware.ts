import { Injectable, NestMiddleware } from "@nestjs/common";
import { request, response, NextFunction } from "express";


@Injectable()
    export class UserMiddleWare implements NestMiddleware {
        use(req: Request, res: Response, next: NextFunction) {
            console.log("Class Middleware of User");
        next();
        }
    }
