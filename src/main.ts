import { NestFactory } from '@nestjs/core';
import { Request, Response, NextFunction } from 'express';
import { RootModule } from './root.module';


function globalMiddleWareOne(req: Request, res: Response, next: NextFunction){
  console.log("Global Middleware");
  next();
}


async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleWareOne);
  await app.listen(3000);
}
bootstrap();
