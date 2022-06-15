import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { user_details } from "src/model/user.model";
import { JwtService } from "./jwt.service";
import * as bcrypt from 'bcryptjs'
import { JwtStrategy } from "src/users/passport/refresh.jwt.strategy";
import { ExtractJwt } from "passport-jwt";

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_DETAILS_REPOSITORY')
        private readonly userRepository: typeof user_details, private readonly JwtService: JwtService, private readonly jwtStrategy: JwtStrategy)
        {}

    async auth(email:string, password:string) {
        var user = await this.userRepository.findOne({where: {email: email}});
        if(!user){
            throw new HttpException("Invalid email", HttpStatus.UNAUTHORIZED);
        }
        var isValid = await bcrypt.compare(password, user.password);

        if(isValid){
            console.log("compare",isValid);
            
            var token = await this.JwtService.createToken(user.id);
            var accessToken = await this.JwtService.accessToken(user.id);
            return { RefresToken: token.token,RefreshTokenExpire: token.expireIn, accessToken: accessToken, accessTokenExpire: accessToken.expireIn};
        }
        else{
            throw new HttpException("Invalid password", HttpStatus.UNAUTHORIZED);
        }
    }
    async refreshToken(refreshToken:string) {
        var token = await this.JwtService.validateRefreshToken(refreshToken);
        console.log("user",token.user_id);
        var access = await this.JwtService.accessToken(token.user_id);
        return { accessToken: access.token, accessTokenExpire: access.expireIn};
    }
}
