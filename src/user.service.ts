import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    
    addUser() : string{
        return "New User is Created";
    }

    getUsers() : string{
        return "All User Get";
    }

    getUser() : string{
        return "User Get By ID";
    }

    UpdateUser() : string{
        return "User Updated";
    }

    DeleteUser() : string{
        return "User Deleted"
    }
}