import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto";


let USERS = [];

@Controller('users')
export class UsersController{
    
    @Post()
    addUser(@Body() createUserDto: CreateUserDTO)
    {
        USERS.push(createUserDto);
        console.log(USERS);
        return 'User added';
    }

    @Get()
    getUsers(){
        return USERS;
    }

    @Get(':id')
    getUser(@Param('id') id: number){
        return USERS.find((user) => +user.id === +id);
    }

    @Put(':id')
    UpdateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO) {
        const userIdx =  USERS.findIndex((user) => +user.id === +id);

        if(!userIdx){
            return;
        }

        USERS[userIdx] = updateUserDTO;
    }

    @Delete(':id')
    DeleteUser(@Param('id') id: number) {
        USERS =  USERS.filter((user) => +user.id != +id);
        console.log("User Deleted")
}

}