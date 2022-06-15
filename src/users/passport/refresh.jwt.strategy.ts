import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtService } from "../../auth/jwt.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly jwtService: JwtService) {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField("token"),
            pasReqToCallback: true,
            ignoreExpiration: false,
            secretOrKey: "refresh secret",
        });
}
    // public async validate(payload: any, reqs: any, done: Function) {
    //     console.log("payload",payload);
    //     const user = await this.jwtService.validateUser(reqs.id);
    //     if (!user) {
    //         return done(new Error("User not found"), false);
    //     }   
    //     done(null, user);
    // }
}