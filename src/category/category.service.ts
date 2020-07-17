import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Category } from './category.type';
import { CategoryDTO } from './category.dto';
import { DocumentType, ReturnModelType } from '@typegoose/typegoose'
import { store, index, show, destroy, destroyAll, update } from 'quick-crud'
import { PaginationQueryDTO, ResourceList } from 'src/utils/types';

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category) private readonly model: ReturnModelType<typeof Category>) { }

    createService(data: CategoryDTO): Promise<DocumentType<Category>> {
        return store({ model: this.model, data });
    }

    async indexService(query: PaginationQueryDTO): Promise<ResourceList<Category>> {
        if (query.limit) query.limit = +query.limit;
        if (query.page) query.limit = +query.page;
        return index({ model: this.model, paginationOptions: query, populateOptions: { path: "products" } })
    }

    async showService(_id: string): Promise<DocumentType<Category>> {
        return show({ model: this.model, where: { _id }, populateOptions: { path: "products" } })
    }

    async destoryService(_id: string): Promise<DocumentType<Category>> {
        return destroy({ model: this.model, where: { _id } })
    }

    async updateService(_id: string, data: CategoryDTO): Promise<DocumentType<Category>> {
        return update({ model: this.model, where: { _id }, data })
    }
}
