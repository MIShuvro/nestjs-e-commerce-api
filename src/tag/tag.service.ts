import { Injectable } from '@nestjs/common';
import { Tag } from './tag.type';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { TagDTO } from './tag.dto';
import { store, index, show, update, destroy } from 'quick-crud';
import { ResourceList, PaginationQueryDTO } from 'src/utils/types';

@Injectable()
export class TagService {

    constructor(@InjectModel(Tag) private readonly model: ReturnModelType<typeof Tag>) { }

    createService(data: TagDTO): Promise<DocumentType<Tag>> {
        return store({ model: this.model, data })
    }

    async indexService(query: PaginationQueryDTO): Promise<ResourceList<Tag>> {
        if (query.limit) query.limit = +query.limit;
        if (query.page) query.limit = +query.page;
        return index({ model: this.model, paginationOptions: query, populateOptions: { path: "products", select: "-categories" } })
    }

    async showService(_id: string): Promise<DocumentType<Tag>> {
        return show({ model: this.model, where: { _id }, populateOptions: { path: "products", select: "-categories" } })
    }

    async updateService(_id: string, data: TagDTO): Promise<DocumentType<Tag>> {
        return update({ model: this.model, where: { _id }, data })
    }

    async deleteService(_id: string): Promise<DocumentType<Tag>> {
        return destroy({ model: this.model, where: { _id } })
    }

}
