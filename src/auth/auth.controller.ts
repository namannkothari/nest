import { Body, Controller, Post } from "@nestjs/common";
import { ResponseSuccess, ResponseError } from "src/common/dto/response.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}                

    @Post("token")                          
    async check(@Body() token){
        try{
            
            if(token.grant_type === "password"){
                var response = await this.authService.auth(token.email, token.password);
                return new ResponseSuccess("User authenticated successfully", response);
            }
            else if(token.grant_type === "refresh_token"){
                console.log(token.refresh_token);
                var responses = await this.authService.refreshToken(token.refresh_token);
                return new ResponseSuccess("User authenticated successfully", responses);
            }
            else{
                return new ResponseError("Invalid_request", token);
            }
        }
        catch(error){
            return new ResponseError("Invalid_request", error);
        }
    }
}