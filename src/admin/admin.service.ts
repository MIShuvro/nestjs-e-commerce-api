import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { Admin } from './admin.type';
import { AdminDTO } from './admin.dto';
import { store, show } from 'quick-crud';

@Injectable()
export class AdminService {

    constructor(@InjectModel(Admin) private readonly model: ReturnModelType<typeof Admin>) { }

    createService(data: AdminDTO): Promise<DocumentType<Admin>> {
        return store({ model: this.model, data })
    }

    async getById(_id: string): Promise<DocumentType<Admin>> {
        return show({ model: this.model, where: { _id } })
    }

    async getByUsername(username: string): Promise<DocumentType<Admin>> {
        return show({ model: this.model, where: { username } })
    }

    async getByEmail(email: string): Promise<DocumentType<Admin>> {
        return show({ model: this.model, where: { email } })
    }


    async getByIdentifire(identifier: string): Promise<DocumentType<Admin>> {

        return this.model.findOne({
            $or: [{ username: identifier }, { email: identifier }],
        });
    }

    async count(): Promise<any> {
        return this.model.countDocuments()
    }

}
