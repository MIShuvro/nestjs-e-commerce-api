import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Cart } from './cart.type';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { CartDTO } from './cart.dto';
import { store, index, destroy } from 'quick-crud'
import { PaginationQueryDTO, ResourceList } from 'src/utils/types';
@Injectable()
export class CartService {

    constructor(@InjectModel(Cart) private readonly model: ReturnModelType<typeof Cart>) { }

    createService(data: CartDTO): Promise<DocumentType<Cart>> {
        return store({ model: this.model, data })
    }

    async indexService(author: string, query: PaginationQueryDTO): Promise<ResourceList<Cart>> {
        if (query.limit) query.limit = +query.limit;
        if (query.page) query.limit = +query.page;
       
        return index({ model: this.model, where: { author }, paginationOptions: query, populateOptions: { path: 'products', select: "-categories -tag -location" } })
    }

    async destoryService(_id: string): Promise<ResourceList<Cart>> {
        return destroy({ model: this.model, where: { _id } })
    }
}
