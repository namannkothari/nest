import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { DatabaseModule } from "src/database/database.module";
import { userDetails } from "./users.providers";
@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [UsersService, ...userDetails],
    exports: [...userDetails],
})
export class UsersModule {}