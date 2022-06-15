import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UsersModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtService } from "./jwt.service";
import { userDetails } from "src/users/users.providers";
import { JwtStrategy } from "src/users/passport/refresh.jwt.strategy";

@Module({
    imports: [DatabaseModule, UsersModule],
    controllers: [AuthController],
    providers: [AuthService, JwtService,...userDetails,JwtStrategy],
    
})
export class AuthModule {}