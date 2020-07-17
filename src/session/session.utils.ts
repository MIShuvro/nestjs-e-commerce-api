import { Request } from 'express'


export enum AUTH_DOOMAIN {
    ADMIN = "ADMIN",
    USER = "USER"
}

export interface jwtPayload {
    iss: string
    sub: string
    domain: AUTH_DOOMAIN
}

export interface SessionRequest extends Request {
    user: jwtPayload

}