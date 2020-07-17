import { Injectable, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { AdminRegisterDTO, AdminLoginDTO, AuthPayload } from './auth.dto';
import { Admin } from 'src/admin/admin.type';
import { DocumentType } from '@typegoose/typegoose'
import { SessionService } from 'src/session/session.service';
import { AUTH_DOOMAIN, jwtPayload } from 'src/session/session.utils';

@Injectable()
export class AuthService {
    constructor(private readonly adminService: AdminService,
        private readonly sessionService: SessionService
    ) { }

    async registerAdmin(data: AdminRegisterDTO): Promise<DocumentType<Admin>> {

        const count = await this.adminService.count()

        if (count)
            throw new ForbiddenException("Admin Registration has been truned off.")

        return this.adminService.createService(data)
    }

    async loginAdmin(data: AdminLoginDTO): Promise<AuthPayload> {

        const { identifire, password } = data
        const admin = await this.adminService.getByIdentifire(identifire);


        if (!admin) throw new UnauthorizedException()

        const matchPassword = await admin.comparePassword(password)

        if (!matchPassword) throw new UnauthorizedException()

        // generate token
        const token = await this.sessionService.findORcreate(admin._id, AUTH_DOOMAIN.ADMIN)

        const authPayload = {
            _id: token.id,
            token: token.token,
            domain: token.domain
        }
        return authPayload
    }

    async logoutAdmin(token: jwtPayload): Promise<{ message: string }> {
        const { sub, domain } = token
        const isLoggedOut = this.sessionService.destorySession(sub, domain)

        if (isLoggedOut) {
            return {
                message: "Successfully logged out."
            }
        }
    }
}
