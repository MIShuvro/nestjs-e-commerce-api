import { prop, ModelOptions } from "@typegoose/typegoose"
import { AUTH_DOOMAIN } from "./session.utils"



@ModelOptions({ schemaOptions: { timestamps: true } })
export class Session {

    @prop({ required: true, trim: true })
    sub: string

    @prop({ required: true, trim: true })
    domain: AUTH_DOOMAIN

    @prop({ required: true, trim: true })
    token: string
}