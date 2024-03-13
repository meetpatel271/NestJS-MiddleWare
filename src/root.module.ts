import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { UserMiddleWare } from './user.middleware';


@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService],
  exports: [],
})

export class RootModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleWare).forRoutes("users")
  }
  constructor(){
    console.log("Root Module");
  }
}
