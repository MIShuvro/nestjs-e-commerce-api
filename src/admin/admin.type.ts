import { Prop, Pre, plugin } from '@typegoose/typegoose'
import { hashPassword } from 'src/shared/hashPassword'
import * as uniquevalidator from 'mongoose-unique-validator'
import { compare } from 'bcryptjs'

@Pre<Admin>("save", function () {
    this.password = hashPassword(this.password)
})

@plugin(uniquevalidator, { message: '{VALUE} already taken' })

export class Admin {

    @Prop({ required: true, trim: true })
    name: string

    @Prop({ required: true, trim: true, unique: true })
    username: string

    @Prop({ required: true, trim: true, unique: true })
    email: string

    @Prop({ required: true, trim: true })
    password: string

    comparePassword(hashPassword: string): Promise<boolean> {
        return compare(hashPassword, this.password)
    }
}