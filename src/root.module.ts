import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';


@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor(){
    console.log("Root Module");
  }
}
