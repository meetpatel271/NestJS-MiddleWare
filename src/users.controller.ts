import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UsersController{
    
    constructor(private userService : UserService){}
    // public userService : UserService = new UserService();

    @Post()
    addUser()
    {
        return this.userService.addUser();
    }

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: number){
        return this.userService.getUser();
    }

    @Put(':id')
    UpdateUser() {
        return this.userService.UpdateUser();
    }

    @Delete(':id')
    DeleteUser() {
        return this.userService.DeleteUser();
}

}