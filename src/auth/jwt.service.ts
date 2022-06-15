import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { user_details } from "src/model/user.model";
import * as jwt from "jsonwebtoken";


@Injectable()
export class JwtService {
    constructor(
        @Inject('USER_DETAILS_REPOSITORY')
        private readonly userRepository: typeof user_details){}

    async createToken(id:number){
        const expireIn = 60 * 60 * 24 * 7, // 1 week                      
        secretOrKey = 'refresh secret';
        const userInfo = {id: id};
        const token = jwt.sign(userInfo, secretOrKey, { expiresIn: expireIn });
        return {
            expireIn: expireIn,
            token: token
        }
    }

    async accessToken(id:number){
        console.log("in accessToken");
        
        const expireIn = 60 * 60,                
        secretOrKey = 'access secret';
        const userInfo = {id: id};
        const token = jwt.sign(userInfo, secretOrKey, { expiresIn: expireIn });
        return {
            expireIn: expireIn,
            token: token
        }
    }

    async validateRefreshToken(refreshToken:string){
        const user_id=jwt.verify(refreshToken, 'refresh secret', (err, decoded) => {
            if (err) {
                throw new HttpException("Invalid refresh token", HttpStatus.UNAUTHORIZED);
            }
           
                console.log("decoded",decoded.id);
                return decoded.id
           
        })
        console.log("user_id",user_id);
        var user = await this.userRepository.findOne({where: {id: user_id}});
        if(!user){
            throw new HttpException("user not found or active", HttpStatus.UNAUTHORIZED);
        }
        return {user_id: user_id};
    
    }

    // async validateUser(signedUser: user_details): Promise<user_details> {
    //     var userid = await this.userRepository.findOne({where: {id: signedUser.id}});
    //     if(!userid){
    //         throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    //     }
    //     console.log("userid",userid);
        
    //     return userid;
    // }
}