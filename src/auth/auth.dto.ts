import { IsNotEmpty, IsEmail } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { AUTH_DOOMAIN } from "src/session/session.utils"


export class AdminRegisterDTO {

    @ApiProperty({
        type: String,
        required: true,
        description: "Admin Full Name."
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        type: String,
        required: true,
        description: "Admin Username Name."
    })
    @IsNotEmpty()
    username: string

    @ApiProperty({
        type: String,
        required: true,
        description: "Admin Email."
    })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({
        type: String,
        required: true,
        description: "Admin Password."
    })
    @IsNotEmpty()
    password: string

}

export class AdminLoginDTO {

    @ApiProperty({
        type: String,
        required: true,
        description: "Admin Email/Password."
    })
    @IsNotEmpty()
    identifire: string

    @ApiProperty({
        type: String,
        required: true,
        description: "Admin Password."
    })
    @IsNotEmpty()
    password: string
}

export interface AuthPayload {
    domain: AUTH_DOOMAIN
    token: string
}