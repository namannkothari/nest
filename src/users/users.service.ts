import { Inject, Injectable } from "@nestjs/common";
import { user_details } from "../model/user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from 'bcryptjs'


@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_DETAILS_REPOSITORY') 
        private readonly userRepository: typeof user_details,){}

    async create(createUserDto:CreateUserDto): Promise<user_details> {
        var userSignup = await this.userRepository.findAll({where:{email:createUserDto.email}});
        if(userSignup!= null && userSignup.length>0){
            throw new Error ("User already exists");
        }else{
            createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
            return await this.userRepository.create({ 
                first_name:createUserDto.firstName, 
                last_name:createUserDto.lastName,
                email:createUserDto.email, 
                password:createUserDto.password, 
                emailVerified:createUserDto.emailVerified });
            
        }
    }
}