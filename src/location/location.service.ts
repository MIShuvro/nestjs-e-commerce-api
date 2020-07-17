import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Location } from './location.type';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { LocationDTO } from './location.dto';

import { store, show, index, update, destroy } from 'quick-crud';
import { PaginationQueryDTO, ResourceList } from 'src/utils/types';

@Injectable()
export class LocationService {

    constructor(@InjectModel(Location) private readonly model: ReturnModelType<typeof Location>) { }

    createService(data: LocationDTO): Promise<DocumentType<Location>> {
        return store({ model: this.model, data })
    }

    async showService(_id: string): Promise<DocumentType<Location>> {
        return show({ model: this.model, where: { _id }, populateOptions: { path: "products" } });

    }

    async indexService(query: PaginationQueryDTO): Promise<ResourceList<Location>> {
        if (query.limit) query.limit = +query.limit;
        if (query.page) query.limit = +query.page;
        return index({ model: this.model, paginationOptions: query, populateOptions: { path: "products" } })
    }

    async updateService(_id: string, data: LocationDTO): Promise<DocumentType<Location>> {
        return update({ model: this.model, where: { _id }, data })
    }


    async destoryService(_id: string): Promise<DocumentType<Location>> {
        return destroy({ model: this.model, where: { _id } })
    }

}
