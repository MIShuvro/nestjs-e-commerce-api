import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Session } from './session.type';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { AUTH_DOOMAIN, jwtPayload } from './session.utils';
import { JwtService } from '@nestjs/jwt'
import { store, destroy } from 'quick-crud';

@Injectable()
export class SessionService {

    constructor(@InjectModel(Session) private readonly model: ReturnModelType<typeof Session>,
        private readonly jwtService: JwtService
    ) { }

    async findORcreate(sub: string, domain: AUTH_DOOMAIN): Promise<DocumentType<Session>> {

        const session = await this.getSession(sub, domain);


        if (!session) {
            const newSession = await this.createSession(sub, domain)

            return newSession
        }
        return session;
    }

    async getSession(sub: string, domain: AUTH_DOOMAIN): Promise<DocumentType<Session>> {
        return this.model.findOne({ sub, domain })
    }

    async createSession(sub: string, domain: AUTH_DOOMAIN): Promise<DocumentType<Session>> {

        const token = await this.generateToken(sub, domain)

        const data = { sub, domain, token }
        
        const session = await this.model.create(data)
        
        return session
    }


    async generateToken(sub: string, domain: AUTH_DOOMAIN): Promise<string> {
        const payload: jwtPayload = {
            iss: process.env.APP_SECRET,
            sub,
            domain
        }

        return this.jwtService.signAsync(payload)
    }

    async destorySession(sub: string, domain: AUTH_DOOMAIN): Promise<boolean> {
        return destroy({ model: this.model, where: { sub, domain } })
    }

}
