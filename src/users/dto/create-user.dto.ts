import{IsNotEmpty, IsString, IsEmail, MinLength, IsBoolean} from 'class-validator';
export class CreateUserDto {
    
    id: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    password: string;

   
    @IsBoolean()
    emailVerified: boolean;
}


