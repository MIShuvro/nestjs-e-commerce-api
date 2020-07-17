import { Controller, Body, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AdminRegisterDTO, AdminLoginDTO, AuthPayload } from './auth.dto';
import { DocumentType } from '@typegoose/typegoose'
import { Admin } from 'src/admin/admin.type';

@ApiTags("Authentication")
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('/admin/register')
    @UsePipes(ValidationPipe)
    async registerAdmin(@Body() data: AdminRegisterDTO): Promise<DocumentType<Admin>> {
        return this.authService.registerAdmin(data)
    }

    @Post('/admin/login')
    @UsePipes(ValidationPipe)
    async loginAdmin(@Body() data: AdminLoginDTO): Promise<AuthPayload> {
        return this.authService.loginAdmin(data)
    }

   
}
