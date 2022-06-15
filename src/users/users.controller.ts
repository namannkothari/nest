import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";    
import { ResponseError, ResponseSuccess } from "src/common/dto/response.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";


@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post("signup")
    async create(
        @Body() createUserDto: CreateUserDto
        ) {
        try{
            var userSignup = (await this.usersService.create(createUserDto));

            return new ResponseSuccess("User created successfully", userSignup);
        }
        catch(error){
            return new ResponseError("User Already exist", error);
        }
    }

}
    
    
