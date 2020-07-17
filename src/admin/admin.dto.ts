import { IsNotEmpty, IsEmail } from 'class-validator'

export class AdminDTO {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}